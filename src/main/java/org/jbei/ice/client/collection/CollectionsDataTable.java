package org.jbei.ice.client.collection;

import java.util.ArrayList;

import org.jbei.ice.client.component.table.EntryDataTable;
import org.jbei.ice.shared.EntryData;

/**
 * Collections Table
 * 
 * @author Hector Plahar
 */

public class CollectionsDataTable extends EntryDataTable<EntryData> {

    @Override
    protected ArrayList<DataTableColumn<?>> createColumns() {
        ArrayList<DataTableColumn<?>> columns = new ArrayList<DataTableColumn<?>>();

        columns.add(super.addSelectionColumn(30));
        columns.add(super.addTypeColumn(true));
        columns.add(super.addPartIdColumn(true));
        columns.add(super.addNameColumn());
        columns.add(super.addSummaryColumn());
        //        columns.add(super.addOwnerColumn());
        super.addStatusColumn();
        super.addHasAttachmentColumn();
        super.addHasSampleColumn();
        super.addHasSequenceColumn();
        columns.add(super.addCreatedColumn());

        return columns;
    }
}
