package org.jbei.ice.lib.dto.entry;

import org.jbei.ice.storage.hibernate.HibernateUtil;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

/**
 * @author Elena Aravina
 */

public class EntrySamplesTest {
    @Before
    public void setUp() throws Exception {
        HibernateUtil.initializeMock();
        HibernateUtil.beginTransaction();
    }

    @After
    public void tearDown() throws Exception {
        HibernateUtil.commitTransaction();
    }

    @Test
    public void getPlates() {

    }

    @Test
    public void setPlates() {

    }

    @Test
    public void getPartSamples() {

    }

    @Test
    public void setPartSamples() {

    }
}
