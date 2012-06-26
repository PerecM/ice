package org.jbei.ice.lib.account.model;

import org.jbei.ice.lib.dao.IModel;

import javax.persistence.*;

/**
 * Store preferences for a user for an {@link Account} object.
 *
 * @author Zinovii Dmytriv, Timothy Ham
 */
@Entity
@Table(name = "account_preferences")
@SequenceGenerator(name = "sequence", sequenceName = "account_preferences_id_seq", allocationSize = 1)
public class AccountPreferences implements IModel {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequence")
    private long id;

    @Column(name = "preferences")
    @Lob
    private String preferences;

    @Column(name = "restriction_enzymes")
    @Lob
    private String restrictionEnzymes;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "accounts_id", unique = true, nullable = false)
    private Account account;

    public AccountPreferences() {
        super();
    }

    public AccountPreferences(Account account, String preferences, String restrictionEnzymes) {
        super();
        this.preferences = preferences;
        this.restrictionEnzymes = restrictionEnzymes;
        this.account = account;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getPreferences() {
        return preferences;
    }

    public void setPreferences(String preferences) {
        this.preferences = preferences;
    }

    public String getRestrictionEnzymes() {
        return restrictionEnzymes;
    }

    public void setRestrictionEnzymes(String restrictionEnzymes) {
        this.restrictionEnzymes = restrictionEnzymes;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

}