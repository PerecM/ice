package org.jbei.ice.client.bulkupload.model;

import org.jbei.ice.lib.shared.dto.bulkupload.EntryField;
import org.jbei.ice.lib.shared.dto.entry.EntryType;
import org.jbei.ice.lib.shared.dto.entry.PartData;
import org.jbei.ice.lib.shared.dto.entry.StrainData;

public class StrainSheetModel extends SingleInfoSheetModel<StrainData> {

    public StrainData setField(StrainData strain, SheetCellData datum) {

        if (datum == null)
            return strain;

        EntryField header = datum.getTypeHeader();
        String value = datum.getValue();

        if (header == null || value == null)
            return strain;

        switch (header) {
            case SELECTION_MARKERS:
                strain.setSelectionMarkers(value);
                break;

            case PARENTAL_STRAIN:
                strain.setHost(value);
                break;

            case GENOTYPE_OR_PHENOTYPE:
                strain.setGenotypePhenotype(value);
                break;

            case PLASMIDS:
                strain.getLinkedParts().clear();
                for (String plasmid : value.split(",")) {
                    PartData data = new PartData();
                    data.setType(EntryType.PLASMID);
                    data.setPartId(plasmid.trim());
                    strain.getLinkedParts().add(data);
                }
                break;

            // todo : samples
        }

        return strain;
    }

    @Override
    public StrainData createInfo() {
        return new StrainData();
    }
}