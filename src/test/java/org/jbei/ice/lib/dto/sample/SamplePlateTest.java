package org.jbei.ice.lib.dto.sample;

import org.jbei.ice.storage.hibernate.HibernateUtil;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

/**
 * @author Elena Aravina
 */

public class SamplePlateTest {

    private SamplePlate service;

    @Before
    public void setUp() throws Exception {
        HibernateUtil.initializeMock();
        HibernateUtil.beginTransaction();
//        service = new SamplePlate();
    }

    @After
    public void tearDown() throws Exception {
        HibernateUtil.commitTransaction();
    }

    @Test
    public void testGetPlateBarcode() throws Exception {

    }

    @Test
    public void testSetPlateBarcode() throws Exception {

    }

    @Test
    public void testGetSamplesOnPlate() throws Exception {

    }

    @Test
    public void testInsertSample() throws Exception {

    }

    @Test
    public void testGetRow() throws Exception {

    }

    @Test
    public void testGetCol() throws Exception {

    }
}
