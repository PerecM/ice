package org.jbei.ice.storage.hibernate.dao;

import org.jbei.ice.storage.hibernate.HibernateUtil;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

/**
 * @author Elena Aravina
 */

public class SampleDAOTest {

    private SampleDAO service;

    @Before
    public void setUp() throws Exception {
        HibernateUtil.initializeMock();
        HibernateUtil.beginTransaction();
        service = new SampleDAO();
    }

    @After
    public void tearDown() throws Exception {
        HibernateUtil.commitTransaction();
    }

    @Test
    public void testGetSamplesByPlate() throws Exception {

    }

}
