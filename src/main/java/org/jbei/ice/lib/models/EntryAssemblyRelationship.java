package org.jbei.ice.lib.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.jbei.ice.lib.dao.IModel;

@Entity
@Table(name = "entry_entry_assembly_relationship")
@SequenceGenerator(name = "sequence", sequenceName = "entry_entry_assembly_relationship_id_seq", allocationSize = 1)
public class EntryAssemblyRelationship implements IModel {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequence")
    private int id;

    @ManyToOne
    @JoinColumn(name = "subject")
    private Entry subject;

    @ManyToOne
    @JoinColumn(name = "object")
    private Entry object;

    @ManyToOne
    @JoinColumn(name = "relationship")
    private AssemblyRelationship relationship;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Entry getSubject() {
        return subject;
    }

    public void setSubject(Entry subject) {
        this.subject = subject;
    }

    public Entry getObject() {
        return object;
    }

    public void setObject(Entry object) {
        this.object = object;
    }

    public AssemblyRelationship getRelationship() {
        return relationship;
    }

    public void setRelationship(AssemblyRelationship relationship) {
        this.relationship = relationship;
    }

}
