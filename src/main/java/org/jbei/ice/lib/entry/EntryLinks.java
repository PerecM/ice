package org.jbei.ice.lib.entry;

import org.jbei.ice.lib.common.logging.Logger;
import org.jbei.ice.lib.dao.DAOFactory;
import org.jbei.ice.lib.dao.hibernate.EntryDAO;
import org.jbei.ice.lib.dto.entry.EntryType;
import org.jbei.ice.lib.dto.entry.PartData;
import org.jbei.ice.lib.entry.model.Entry;

import java.util.ArrayList;
import java.util.List;

/**
 * Represents a main part and the hierarchical links that it is involved in.
 * The specified user must have read privileges on the main part.
 * Some of the actions/methods in this class require write privileges
 *
 * @author Hector Plahar
 */
public class EntryLinks {

    private final EntryDAO entryDAO;
    private final Entry entry;
    private final EntryAuthorization entryAuthorization;
    private final String userId;

    public EntryLinks(String userId, long partId) {
        this.entryDAO = DAOFactory.getEntryDAO();
        this.entry = this.entryDAO.get(partId);
        if (this.entry == null)
            throw new IllegalArgumentException("Could not retrieve part with id " + partId);
        this.userId = userId;
        this.entryAuthorization = new EntryAuthorization();
        this.entryAuthorization.expectRead(userId, this.entry);
    }

    /**
     * Adds a link for the specified entry (or creates a new entry) of the type specified
     *
     * @param partData data for entry to be linked. If the id does not point to an existing entry, a new one will be
     *                 created and linked to this entry
     * @param type     type of link to create. If <code>CHILD</code> (default) is specified, then the entry in the parameter
     *                 is added as a child in the hierarchy; if <code>PARENT</code> is specified, then the entry is
     *                 add as a parent in the hierarchy.
     * @return true, if the two entries are successfully linked. false, if the specified hierarchy is not compatible
     * with the types of the link specified e.g. an plasmid cannot be added as a <code>PARENT</code> of a strain
     * @throws org.jbei.ice.lib.access.PermissionException if the user does not have write permissions
     *                                                     on at least one of the entries being linked
     */
    public boolean addLink(PartData partData, LinkType type) {
        long linkId = partData.getId();
        Entry linkedEntry = this.entryDAO.get(linkId);
        if (linkedEntry == null) {
            Logger.error("Could not retrieve entry for linking: " + linkId);
            return false;
        }

        entryAuthorization.expectWrite(userId, linkedEntry);
        entryAuthorization.expectWrite(userId, entry);

        // add as parent
        switch (type) {
            case PARENT:
                return addParentEntry(linkedEntry);

            // add as child. default behavior
            case CHILD:
            default:
                return addChildEntry(linkedEntry);
        }
    }

    /**
     * Adds specified entry as a child of the entry associated with <code>this</code>
     *
     * @param child entry to be added as the child entry
     * @return true if added successfully, false otherwise
     */
    protected boolean addChildEntry(Entry child) {
        if (!isCompatible(
                EntryType.nameToType(this.entry.getRecordType()),
                EntryType.nameToType(child.getRecordType()))) {
            return false;
        }
        this.entry.getLinkedEntries().add(child);
        return this.entryDAO.update(this.entry) != null;
    }

    protected boolean addParentEntry(Entry parent) {
        if (!isCompatible(
                EntryType.nameToType(parent.getRecordType()),
                EntryType.nameToType(this.entry.getRecordType()))) {
            return false;
        }
        parent.getLinkedEntries().add(this.entry);
        return this.entryDAO.update(parent) != null;
    }

    private boolean isCompatible(EntryType parentType, EntryType childType) {
        switch (parentType) {
            case ARABIDOPSIS:
                return childType == parentType || childType == EntryType.PART;

            case STRAIN:
                return childType == parentType || childType == EntryType.PLASMID || childType == EntryType.PART;

            case PART:
            default:
                return childType == parentType;

            case PLASMID:
                return childType == parentType || childType == EntryType.PART;
        }
    }

    /**
     * Retrieves the list of children this entry, that the user has read permissions
     *
     * @return list of retrieved entries
     */
    public List<PartData> getChildren() {
        List<PartData> children = new ArrayList<>(this.entry.getLinkedEntries().size());
        for (Entry childEntry : this.entry.getLinkedEntries()) {
            if (!entryAuthorization.canRead(this.userId, childEntry))
                continue;
            children.add(childEntry.toDataTransferObject());
        }
        return children;
    }

    /**
     * Retrieves list of this entry's parents that user has read access to
     *
     * @return list of parents of entry
     */
    public List<PartData> getParents() {
        List<Entry> parents = this.entryDAO.getParents(this.entry.getId());
        List<PartData> parentData = new ArrayList<>(parents.size());
        for (Entry parent : parents) {
            if (!entryAuthorization.canRead(this.userId, parent))
                continue;
            parentData.add(parent.toDataTransferObject());
        }
        return parentData;
    }
}