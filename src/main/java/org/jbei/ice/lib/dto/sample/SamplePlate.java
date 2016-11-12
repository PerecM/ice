package org.jbei.ice.lib.dto.sample;

import org.jbei.ice.storage.IDataTransferModel;
import org.jbei.ice.storage.model.Storage;

/**
 * Class to transfer data about all samples that a particular plate contains.
 *
 * @author Elena Aravina
 */
public class SamplePlate implements IDataTransferModel {
    private static final int DEFAULT_ROWS = 8;
    private static final int DEFAULT_COLS = 12;

    private String plateBarcode;
    private int rows;
    private int cols;
    private PartSample[][] samplesOnPlate;

    //constructor for a 96 well plate
    public SamplePlate(String plateBarcode) {
        this.plateBarcode = plateBarcode;
        this.rows = DEFAULT_ROWS;
        this.cols = DEFAULT_COLS;
        this.samplesOnPlate = new PartSample[rows][cols];
    }

    //constructor for a custom size plate
    public SamplePlate(String plateBarcode, int rows, int cols) {
        this.plateBarcode = plateBarcode;
        this.rows = rows;
        this.cols = cols;
        this.samplesOnPlate = new PartSample[rows][cols];
    }

    public String getPlateBarcode() {
        return plateBarcode;
    }

    public PartSample[][] getSamplesOnPlate() {
        return samplesOnPlate;
    }

    /**
     *
     * @param sample {@link PartSample} to insert in the plate structure
     * @param well where to insert {@link PartSample}
     * @return if the insertion was successful
     * @throws Exception
     */
    public boolean insertSample(PartSample sample, Storage well) throws Exception {
        String wellBarcode = well.getIndex();
        int row = getRow(wellBarcode);
        int col = getCol(wellBarcode);

        if (row >= rows || col >= cols || row < 0 || col < 0) {
            return false;
        }

        if (this.samplesOnPlate[row][col] != null) {
            throw new Exception();
        }

        this.samplesOnPlate[row][col] = sample;
        return true;
    }

    public int getRow(String wellBarcode) {
        return (int) wellBarcode.charAt(0) - 65;
    }

    public int getCol(String wellBarcode) {
        if (wellBarcode.length() < 3) {
            return -1;
        }
        String col = wellBarcode.substring(1);
        if (col.charAt(0) == '0') {
            col = col.substring(1);
        }
        return Integer.parseInt(col) - 1;
    }
}