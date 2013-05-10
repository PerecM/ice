package org.jbei.ice.lib.account;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.KeySpec;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;

import org.jbei.ice.lib.account.model.Account;
import org.jbei.ice.lib.utils.UtilityException;
import org.jbei.ice.lib.utils.Utils;
import org.jbei.ice.shared.dto.AccountInfo;
import org.jbei.ice.shared.dto.ConfigurationKey;

/**
 * Utility class for account management
 *
 * @author Hector Plahar
 */
public class AccountUtils {

    /**
     * Return the encrypted version of the given password, using the salt from the settings file.
     *
     * @param password non-empty string
     * @return 40 character encrypted string.
     */
    public static String encryptPassword(String password, String userSalt) {
        if (password == null || password.isEmpty())
            throw new IllegalArgumentException("Cannot encrypt null or empty password");
        String salt = Utils.getConfigValue(ConfigurationKey.SECRET_KEY);
        if (salt == null || salt.isEmpty())
            salt = userSalt;
        return Utils.encryptSHA(salt + password);
    }

    public static String encryptNewUserPassword(String password, String salt) throws UtilityException {
        if (password == null || password.trim().isEmpty() || salt == null || salt.trim().isEmpty())
            throw new UtilityException("Password and salt cannot be empty");

        KeySpec spec = new PBEKeySpec(password.toCharArray(), salt.getBytes(), 20000, 160);

        try {
            SecretKeyFactory f = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
            return new String(f.generateSecret(spec).getEncoded());
        } catch (NoSuchAlgorithmException | InvalidKeySpecException e) {
            throw new UtilityException(e);
        }
    }

    public static Account fromDTO(AccountInfo info) {
        Account account = new Account();
        account.setFirstName(info.getFirstName());
        account.setLastName(info.getLastName());
        account.setInitials(info.getInitials());
        account.setEmail(info.getEmail().trim());
        account.setDescription(info.getDescription());
        account.setInstitution(info.getInstitution());
        account.setIp("");
        account.setIsSubscribed(1);
        return account;
    }
}
