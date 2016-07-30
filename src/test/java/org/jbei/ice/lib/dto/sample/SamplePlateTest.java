package org.jbei.ice.lib.dto.sample;

import org.jbei.ice.lib.dto.StorageLocation;
import org.jbei.ice.storage.hibernate.HibernateUtil;
import org.jbei.ice.storage.model.Storage;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.Random;

/**
 * @author Elena Aravina
 */

public class SamplePlateTest {

    private SamplePlate plate;
    private String wellBarcode;
    private final char[] PLATE_96_ROWS = {'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'};
    private final String[] PLATE_96_COLS = {"01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"};

    @Before
    public void setUp() throws Exception {
        HibernateUtil.initializeMock();
        HibernateUtil.beginTransaction();
        wellBarcode = generateWellBarcode();
        plate = new SamplePlate(wellBarcode);
    }

    @After
    public void tearDown() throws Exception {
        HibernateUtil.commitTransaction();
    }

    @Test (expected = Exception.class)
    public void testInsertSample() throws Exception {
        PartSample partSample1 = new PartSample(); // #1
        Storage storage1 = new Storage();
        storage1.setIndex(plate.getPlateBarcode());
        StorageLocation storageLocation1 = new StorageLocation();
        storageLocation1.setDisplay(plate.getPlateBarcode());
        partSample1.setLocation(storageLocation1);

        Assert.assertTrue(plate.insertSample(partSample1, storage1));
        Assert.assertNotNull(plate.getSamplesOnPlate()[plate.getRow(wellBarcode)][plate.getCol(wellBarcode)]);

        PartSample partSample2 = new PartSample(); // #2
        Storage storage2 = new Storage();
        storage2.setIndex("?00");
        StorageLocation storageLocation2 = new StorageLocation();
        storageLocation2.setDisplay("?00");
        partSample2.setLocation(storageLocation2);

        Assert.assertFalse(plate.insertSample(partSample2, storage2));

        PartSample partSample3 = new PartSample(); // #3
        Storage storage3 = new Storage();
        storage3.setIndex("O19");
        StorageLocation storageLocation3 = new StorageLocation();
        storageLocation3.setDisplay("O19");
        partSample3.setLocation(storageLocation3);

        Assert.assertFalse(plate.insertSample(partSample3, storage3));

        plate.insertSample(partSample1, storage1); // #4
    }

    @Test
    public void testGetCol() throws Exception {
        Assert.assertEquals(plate.getCol("O0"), -1); // #1

        Assert.assertTrue(plate.getCol(wellBarcode) >= 0); // #2
    }

    private String generateWellBarcode() {
        Random random = new Random();
        return PLATE_96_ROWS[random.nextInt(8)] + PLATE_96_COLS[random.nextInt(12)];
    }
}
