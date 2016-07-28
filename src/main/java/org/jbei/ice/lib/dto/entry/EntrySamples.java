package org.jbei.ice.lib.dto.entry;

import org.jbei.ice.lib.dto.sample.PartSample;
import org.jbei.ice.lib.dto.sample.SamplePlate;
import org.jbei.ice.storage.IDataTransferModel;

import java.util.ArrayList;

/**
 * Class to transfer data:
 * all samples (stored on the plates) for a particular entry,
 * and all other samples that are stored on those plates.
 *
 * @author Elena Aravina
 */

public class EntrySamples implements IDataTransferModel {
    private ArrayList<SamplePlate> plates;
    private ArrayList<PartSample> partSamples;

    public ArrayList<SamplePlate> getPlates() {
        return plates;
    }

    public void setPlates(ArrayList<SamplePlate> plates) {
        this.plates = plates;
    }

    public ArrayList<PartSample> getPartSamples() {
        return partSamples;
    }

    public void setPartSamples(ArrayList<PartSample> partSamples) {
        this.partSamples = partSamples;
    }
}
