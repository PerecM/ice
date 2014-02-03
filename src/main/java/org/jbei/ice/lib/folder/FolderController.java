package org.jbei.ice.lib.folder;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.jbei.ice.ControllerException;
import org.jbei.ice.lib.access.PermissionsController;
import org.jbei.ice.lib.account.AccountController;
import org.jbei.ice.lib.account.AccountType;
import org.jbei.ice.lib.account.model.Account;
import org.jbei.ice.lib.common.logging.Logger;
import org.jbei.ice.lib.dao.DAOException;
import org.jbei.ice.lib.dao.DAOFactory;
import org.jbei.ice.lib.dao.hibernate.AccountDAO;
import org.jbei.ice.lib.dao.hibernate.FolderDAO;
import org.jbei.ice.lib.dao.hibernate.PermissionDAO;
import org.jbei.ice.lib.dto.entry.PartData;
import org.jbei.ice.lib.dto.folder.FolderDetails;
import org.jbei.ice.lib.dto.folder.FolderType;
import org.jbei.ice.lib.dto.permission.AccessPermission;
import org.jbei.ice.lib.entry.EntryAuthorization;
import org.jbei.ice.lib.entry.EntryController;
import org.jbei.ice.lib.entry.model.Entry;
import org.jbei.ice.lib.group.Group;
import org.jbei.ice.lib.group.GroupController;
import org.jbei.ice.lib.shared.ColumnField;
import org.jbei.ice.servlet.ModelToInfoFactory;

/**
 * @author Hector Plahar
 */
public class FolderController {

    private final FolderDAO dao;
    private final AccountController accountController;
    private final PermissionDAO permissionDAO;
    private final PermissionsController permissionsController;
    private final AccountDAO accountDAO;

    public FolderController() {
        dao = DAOFactory.getFolderDAO();
        accountController = new AccountController();
        permissionDAO = DAOFactory.getPermissionDAO();
        permissionsController = new PermissionsController();
        accountDAO = DAOFactory.getAccountDAO();
    }

    public Folder removeFolderContents(Account account, long folderId, ArrayList<Long> entryIds)
            throws ControllerException {
        boolean isAdministrator = accountController.isAdministrator(account);

        Folder folder;
        try {
            folder = dao.get(folderId);
        } catch (DAOException e) {
            throw new ControllerException(e);
        }

        if (folder.getType() == FolderType.PUBLIC && !isAdministrator) {
            throw new ControllerException(account.getEmail() + ": cannot modify non user folder " + folder.getName());
        }

        try {
            dao.removeFolderEntries(folder, entryIds);
        } catch (DAOException e) {
            throw new ControllerException(e);
        }
        return folder;
    }

    /**
     * @return folders that are shared with everyone on the site. These are listed under "Collections".
     * @throws ControllerException
     */
    protected List<Folder> getPublicFolders() throws ControllerException {
        Set<Folder> folders = new HashSet<>();
        try {
            folders.addAll(dao.getFoldersByType(FolderType.PUBLIC));
            return new ArrayList<>(folders);
        } catch (DAOException de) {
            throw new ControllerException(de);
        }
    }

    public Long getFolderSize(long id) throws ControllerException {
        try {
            return dao.getFolderSize(id);
        } catch (DAOException e) {
            throw new ControllerException(e);
        }
    }

    public Folder getFolderById(long folderId) throws ControllerException {
        try {
            return dao.get(folderId);
        } catch (DAOException e) {
            throw new ControllerException(e);
        }
    }

    protected boolean canReadFolderContents(Account account, Folder folder) throws ControllerException {
        if (folder.getType() == FolderType.PUBLIC)
            return true;

        if (account.getType() == AccountType.ADMIN)
            return true;

        if (account.getEmail().equals(folder.getOwnerEmail()))
            return true;

        // now check actual permissions
        Set<Folder> folders = new HashSet<>();
        folders.add(folder);
        PermissionsController controller = new PermissionsController();
        if (controller.groupHasReadPermission(account.getGroups(), folders)
                || controller.groupHasWritePermission(account.getGroups(), folders))
            return true;

        return controller.accountHasReadPermission(account, folders)
                || controller.accountHasWritePermission(account, folders);
    }

    public FolderDetails retrieveFolderContents(Account account, long folderId, ColumnField sort, boolean asc,
            int start, int limit) throws ControllerException {
        try {
            Folder folder = getFolderById(folderId);
            if (folder == null)
                return null;

            // should have permission to read folder (folder should be public, you should be an admin, or owner)
            if (!canReadFolderContents(account, folder)) {
                Logger.warn(account.getEmail() + ": does not have permissions to read folder " + folder.getId());
                return null;
            }

            PermissionsController controller = new PermissionsController();
            FolderDetails details = new FolderDetails(folder.getId(), folder.getName());
            details.setType(folder.getType());
            long folderSize = getFolderSize(folderId);
            details.setCount(folderSize);
            details.setDescription(folder.getDescription());
            details.setAccessPermissions(controller.retrieveSetFolderPermission(folder, false));
            details.setPublicReadAccess(controller.isPublicVisible(folder));
            Account owner = accountController.getByEmail(folder.getOwnerEmail());
            if (owner != null)
                details.setOwner(owner.toDataTransferObject());
            EntryAuthorization entryAuthorization = new EntryAuthorization();

            ArrayList<Entry> results = dao.retrieveFolderContents(folderId, sort, asc, start, limit);
            for (Entry entry : results) {
                PartData info = ModelToInfoFactory.createTableViewData(entry, false);
                info.setCanEdit(entryAuthorization.canWrite(account.getEmail(), entry));
                details.getEntries().add(info);
            }
            return details;
        } catch (DAOException de) {
            throw new ControllerException(de);
        }
    }

    public FolderDetails delete(Account account, long folderId) throws ControllerException {
        Folder folder;
        try {
            folder = dao.get(folderId);
        } catch (DAOException e) {
            throw new ControllerException(e);
        }

        if (folder == null)
            return null;

        if (account.getType() != AccountType.ADMIN && !folder.getOwnerEmail().equalsIgnoreCase(account.getEmail())) {
            String errorMsg = account.getEmail() + ": does not have sufficient permissions to delete folder";
            Logger.warn(errorMsg);
        }

        FolderDetails details = new FolderDetails(folder.getId(), folder.getName());
        long folderSize = getFolderSize(folderId);
        details.setCount(folderSize);
        details.setDescription(folder.getDescription());

        dao.delete(folder);
        permissionDAO.clearPermissions(folder);
        return details;
    }

    public Folder addFolderContents(Account account, long id, ArrayList<Entry> entrys) throws ControllerException {
        try {
            Folder folder = dao.get(id);
            if (folder == null)
                throw new ControllerException("Could not retrieve folder with id " + id);
            folder = dao.addFolderContents(folder, entrys);
            if (folder.isPropagatePermissions()) {
                new PermissionsController().propagateFolderPermissions(account, folder, true);
            }
            return folder;
        } catch (DAOException e) {
            throw new ControllerException(e);
        }
    }

    public FolderDetails createNewFolder(Account account, String name, String description, ArrayList<Long> contents)
            throws ControllerException {
        Folder folder = new Folder(name);
        folder.setOwnerEmail(account.getEmail());
        folder.setDescription(description);
        folder.setType(FolderType.PRIVATE);
        folder.setCreationTime(new Date(System.currentTimeMillis()));
        try {
            folder = dao.create(folder);
            FolderDetails details = new FolderDetails(folder.getId(), folder.getName());
            if (contents != null && !contents.isEmpty()) {
                ArrayList<Entry> entrys = new ArrayList<>(new EntryController().getEntriesByIdSet(
                        account, contents));
                dao.addFolderContents(folder, entrys);
                details.setCount(contents.size());
            } else {
                details.setCount(0l);
            }
            details.setType(folder.getType());
            details.setDescription(folder.getDescription());

            return details;
        } catch (DAOException e) {
            throw new ControllerException(e);
        }
    }

    public Folder updateFolder(Folder folder) throws ControllerException {
        try {
            return dao.create(folder);
        } catch (DAOException e) {
            throw new ControllerException();
        }
    }

    public List<Folder> getFoldersByEntry(Entry entry) throws ControllerException {
        try {
            return dao.getFoldersByEntry(entry);
        } catch (DAOException e) {
            throw new ControllerException(e);
        }
    }

    public Collection getFolderStats(String userId) {
        Account account = getAccount(userId);
        if (account == null)
            return null;

        Collection collection = new Collection();
        collection.setAvailable(32);
        collection.setDeleted(4);
        collection.setPersonal(123);
        collection.setShared(2);
        return collection;
    }

    public ArrayList<FolderDetails> getUserFolders(String userId) {
        Account account = getAccount(userId);
        List<Folder> folders = dao.getFoldersByOwner(account);
        ArrayList<FolderDetails> folderDetails = new ArrayList<>();
        for (Folder folder : folders) {
            FolderDetails details = new FolderDetails(folder.getId(), folder.getName());
            long folderSize = dao.getFolderSize(folder.getId());
            details.setCount(folderSize);
        }
        return folderDetails;
    }

    protected Account getAccount(String userId) {
        Account account = accountDAO.getByEmail(userId);
        if (account == null)
            throw new IllegalArgumentException("No account with id " + userId);
        return account;
    }

    // available folders
    public ArrayList<FolderDetails> retrieveFoldersForUser(String userId) throws ControllerException {
        ArrayList<FolderDetails> results = new ArrayList<>();
        Account account = getAccount(userId);

        try {
            // publicly visible collections are owned by the system
            List<Folder> folders = getPublicFolders();
            for (Folder folder : folders) {
                long id = folder.getId();
                FolderDetails details = new FolderDetails(id, folder.getName());
                long folderSize = getFolderSize(id);
                details.setCount(folderSize);
                details.setDescription(folder.getDescription());
                details.setType(FolderType.PUBLIC);
                if (account != null && account.getType() == AccountType.ADMIN) {
                    ArrayList<AccessPermission> accesses = permissionsController.retrieveSetFolderPermission(folder,
                                                                                                             false);
                    details.setAccessPermissions(accesses);
                }
                details.setPropagatePermission(folder.isPropagatePermissions());
                results.add(details);
            }

            // get user folders
            List<Folder> userFolders = dao.getFoldersByOwner(account);
            if (userFolders != null) {
                for (Folder folder : userFolders) {
                    long id = folder.getId();
                    FolderDetails details = new FolderDetails(id, folder.getName());
                    long folderSize = getFolderSize(id);
                    details.setCount(folderSize);
                    details.setType(FolderType.PRIVATE);
                    details.setDescription(folder.getDescription());
                    ArrayList<AccessPermission> accesses = permissionsController.retrieveSetFolderPermission(folder,
                                                                                                             false);
                    details.setAccessPermissions(accesses);
                    details.setPropagatePermission(folder.isPropagatePermissions());
                    details.setPublicReadAccess(permissionsController.isPublicVisible(folder));
                    results.add(details);
                }
            }

            // get folders shared with this user. permissions are included if the user has write permissions for folder
            Set<Folder> sharedFolders = permissionsController.retrievePermissionFolders(account);
            if (sharedFolders != null) {

                for (Folder folder : sharedFolders) {
                    if (userFolders != null && userFolders.contains(folder))
                        continue;

                    ArrayList<AccessPermission> permissions = new ArrayList<>();
                    ArrayList<AccessPermission> folderPermissions = permissionsController.retrieveSetFolderPermission(
                            folder,
                            false);
                    for (AccessPermission accessPermission : folderPermissions) {
                        if (!accessPermission.isCanWrite())
                            continue;

                        // account either has direct write permissions
                        if (accessPermission.getArticle() == AccessPermission.Article.ACCOUNT
                                && accessPermission.getArticleId() == account.getId()) {
                            permissions.add(accessPermission);
                            break;
                        }

                        if (account.getGroups() == null || account.getGroups().isEmpty())
                            continue;

                        // or belongs to a group that has the write permissions
                        if (accessPermission.getArticle() == AccessPermission.Article.GROUP) {
                            Group group = new GroupController().getGroupById(
                                    accessPermission.getArticleId());
                            if (group == null)
                                continue;

                            if (account.getGroups().contains(group)) {
                                permissions.add(accessPermission);
                                break;
                            }
                        }
                    }

                    FolderDetails details = new FolderDetails(folder.getId(), folder.getName());
                    if (!permissions.isEmpty())
                        details.setAccessPermissions(permissions);

                    details.setType(FolderType.SHARED);
                    long folderSize = getFolderSize(folder.getId());
                    details.setCount(folderSize);
                    details.setDescription(folder.getDescription());
                    Account owner = accountController.getByEmail(folder.getOwnerEmail());
                    if (owner != null) {
                        details.setOwner(owner.toDataTransferObject());
                    }
                    details.setPropagatePermission(folder.isPropagatePermissions());
                    results.add(details);
                }
            }
        } catch (DAOException de) {
            throw new ControllerException(de);
        }

        return results;
    }

    /**
     * "Promote"s a collection into a system collection. This allows it to be categorised under "Collections"
     * This action is restricted to administrators
     *
     * @param account requesting account
     * @param id      collection id
     * @return true if promotion is successful false otherwise
     * @throws ControllerException
     */
    public boolean promoteFolder(Account account, long id) throws ControllerException {
        if (account.getType() != AccountType.ADMIN)
            throw new ControllerException(account.getEmail() + " does not have sufficient access privs for action");

        try {
            Folder folder = dao.get(id);
            if (folder.getType() == FolderType.PUBLIC)
                return true;

            folder.setType(FolderType.PUBLIC);
            folder.setOwnerEmail("");
            folder.setModificationTime(new Date(System.currentTimeMillis()));
            dao.update(folder);

            // remove all permissions for folder
            permissionsController.removeAllFolderPermissions(account, id);
            return true;
        } catch (DAOException e) {
            throw new ControllerException(e);
        }
    }

    /**
     * Opposite of FolderController#demoteFolder(org.jbei.ice.lib.account.model.Account, long)
     * Removes the folder from the system collections menu
     *
     * @param account requesting account. should have administrator privileges
     * @param id      collection identifier
     * @return true on successful remote, false otherwise
     * @throws ControllerException
     */
    public boolean demoteFolder(Account account, long id) throws ControllerException {
        if (account.getType() != AccountType.ADMIN)
            throw new ControllerException(account.getEmail() + " does not have sufficient access privs for action");

        try {
            Folder folder = dao.get(id);
            if (folder.getType() != FolderType.PUBLIC)
                return true;

            folder.setType(FolderType.PRIVATE);
            folder.setModificationTime(new Date(System.currentTimeMillis()));
            folder.setOwnerEmail(account.getEmail());
            dao.update(folder);
            return true;
        } catch (DAOException e) {
            throw new ControllerException(e);
        }
    }

    public boolean setPropagatePermissionForFolder(Account account, long folderId, boolean propagate)
            throws ControllerException {
        try {
            Folder folder = dao.get(folderId);
            if (folder == null)
                return false;

            if (!accountController.isAdministrator(account) &&
                    !folder.getOwnerEmail().equalsIgnoreCase(account.getEmail()))
                return false;

            folder.setPropagatePermissions(propagate);
            folder.setModificationTime(new Date(System.currentTimeMillis()));
            dao.update(folder);
            return permissionsController.propagateFolderPermissions(account, folder, propagate);
        } catch (DAOException de) {
            return false;
        }
    }
}
