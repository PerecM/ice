package org.jbei.ice.storage.hibernate.dao;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.jbei.ice.lib.common.logging.Logger;
import org.jbei.ice.storage.DAOException;
import org.jbei.ice.storage.hibernate.HibernateRepository;
import org.jbei.ice.storage.model.Entry;
import org.jbei.ice.storage.model.Sample;
import org.jbei.ice.storage.model.Storage;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

/**
 * @author Timothy Ham, Zinovii Dmytriv, Hector Plahar, Elena Aravina
 */
public class SampleDAO extends HibernateRepository<Sample> {

    public Sample get(long id) throws DAOException {
        return super.get(Sample.class, id);
    }

    public boolean hasSample(Entry entry) throws DAOException {
        Session session = currentSession();
        try {
            Number itemCount = (Number) session.createCriteria(Sample.class)
                    .setProjection(Projections.countDistinct("id"))
                    .add(Restrictions.eq("entry", entry)).uniqueResult();

            return itemCount.intValue() > 0;
        } catch (HibernateException e) {
            throw new DAOException("Failed to retrieve sample by entry: " + entry.getId(), e);
        }
    }

    public int getSampleCount(Entry entry) {
        Number itemCount = (Number) currentSession().createCriteria(Sample.class)
                .setProjection(Projections.countDistinct("id"))
                .add(Restrictions.eq("entry", entry)).uniqueResult();
        return itemCount.intValue();
    }

    @SuppressWarnings("unchecked")
    public ArrayList<Sample> getSamplesByEntry(Entry entry) throws DAOException {
        Query query = currentSession().createQuery("from " + Sample.class.getName() + " as sample where sample.entry= :entry");
        query.setParameter("entry", entry);
        try {
            return new ArrayList<Sample>(query.list());
        } catch (HibernateException e) {
            Logger.error(e);
            throw new DAOException("Failed to retrieve sample by entry: " + entry.getId(), e);
        }
    }

    /**
     * Retrieve {@link Sample} objects associated with the given {@link Storage} object.
     *
     * @param storage
     * @return ArrayList of Sample objects.
     * @throws DAOException
     */
    @SuppressWarnings("unchecked")
    public ArrayList<Sample> getSamplesByStorage(Storage storage) throws DAOException {
        ArrayList<Sample> samples = null;
        Session session = currentSession();
        try {
            String queryString = "from " + Sample.class.getName() + " as sample where sample.storage = :storage";
            Query query = session.createQuery(queryString);
            query.setEntity("storage", storage);

            @SuppressWarnings("rawtypes")
            List list = query.list();
            if (list != null) {
                samples = (ArrayList<Sample>) list;
            }

        } catch (HibernateException e) {
            throw new DAOException("Failed to retrieve sample by storage id: " + storage.getId(), e);
        }
        return samples;
    }

    /**
     * Retrieve all {@link Sample} objects that have a plate storage with the given barcode
     *
     * @param barcode barcode (or index) of PLATE96 Storage
     * @return
     * @throws DAOException
     */
    public List<Sample> getSamplesByPlate(String barcode) throws DAOException{
        Session session = currentSession();
        List<Storage> tubesStorageIds = new LinkedList<>();
        try {
            DetachedCriteria subCriteriaPlate = DetachedCriteria.forClass(Storage.class, "storagePlate")
                    .add(Restrictions.eq("index", barcode));

            List plates = subCriteriaPlate.getExecutableCriteria(session).list();

            // for each 96 well plate
            for (int i = 0; i < plates.size(); i += 1) {
                Storage plate = (Storage) plates.get(i);

                // get the children (these are well)
                for (Storage well : plate.getChildren()) {
                    Set<Storage> tubesInWell = well.getChildren();
                    if (tubesInWell == null) {
                        continue; //todo take care of childless well?
                    } else if (tubesInWell.size() > 1) {
                        Logger.warn("Well " + well.getIndex() + " has more than one tube: " + tubesInWell.size() );
                    }

                    // assume only one tube in a well
                    Storage tube = tubesInWell.iterator().next();
                    tubesStorageIds.add(tube);
                }
            }
        } catch (HibernateException e) {
            throw new DAOException("Failed to retrieve sample by plate index: " + barcode, e);
        }

        return session.createCriteria(Sample.class.getName())
                .add(Restrictions.in("storage", tubesStorageIds)).list();
    }
}
