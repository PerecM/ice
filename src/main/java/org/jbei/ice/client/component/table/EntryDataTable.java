package org.jbei.ice.client.component.table;

import java.util.Date;

import org.jbei.ice.client.component.table.cell.PartIDCell;
import org.jbei.ice.client.component.table.column.ImageColumn;
import org.jbei.ice.shared.ColumnField;
import org.jbei.ice.shared.EntryData;

import com.google.gwt.cell.client.CheckboxCell;
import com.google.gwt.cell.client.ClickableTextCell;
import com.google.gwt.cell.client.FieldUpdater;
import com.google.gwt.cell.client.TextCell;
import com.google.gwt.cell.client.ValueUpdater;
import com.google.gwt.dom.client.Element;
import com.google.gwt.dom.client.InputElement;
import com.google.gwt.dom.client.NativeEvent;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.event.dom.client.KeyCodes;
import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.user.cellview.client.Header;
import com.google.gwt.user.client.Window;
import com.google.gwt.view.client.DefaultSelectionEventManager;
import com.google.gwt.view.client.MultiSelectionModel;
import com.google.gwt.view.client.ProvidesKey;

/**
 * DataTable for view entities that are EntryDatas. Provides selection support via space bar,
 * mouse click, and additional support for range selection using the shift key
 * 
 * @author hplahar
 * 
 * @param <T>
 */

// TODO : allow specializations to specify column widths
public abstract class EntryDataTable<T extends EntryData> extends DataTable<T> {

    private final EntrySelection selectionModel;

    public EntryDataTable() {
        super();
        selectionModel = new EntrySelection();
        this.setSelectionModel(selectionModel,
            DefaultSelectionEventManager.<T> createCheckboxManager());
    }

    protected DataTableColumn<Boolean> addSelectionColumn(final int columnWidth) {
        final CheckboxCell columnCell = new CheckboxCell(true, false) {
            @Override
            public void onBrowserEvent(Context context, Element parent, Boolean value,
                    NativeEvent event, ValueUpdater<Boolean> valueUpdater) {
                String type = event.getType();

                boolean enterPressed = "keydown".equals(type)
                        && event.getKeyCode() == KeyCodes.KEY_ENTER;
                if ("change".equals(type) || enterPressed) {
                    InputElement input = parent.getFirstChild().cast();
                    Boolean isChecked = input.isChecked();

                    if (!isChecked) {
                        selectionModel.setAllSelected(false);
                    }
                }
            }
        };

        DataTableColumn<Boolean> selectionColumn = new DataTableColumn<Boolean>(columnCell,
                ColumnField.SELECTION) {

            @Override
            public Boolean getValue(T object) {
                // returns column value from underlying data object (EntryDataView in this instance)
                return selectionModel.isSelected(object);
            }
        };
        selectionColumn.setSortable(false);
        SelectionColumnHeader header = new SelectionColumnHeader();

        this.addColumn(selectionColumn, header);
        this.setColumnWidth(selectionColumn, columnWidth, Unit.PX);

        return selectionColumn;
    }

    protected DataTableColumn<String> addTypeColumn(boolean sortable) {
        DataTableColumn<String> typeCol = new DataTableColumn<String>(new TextCell(),
                ColumnField.TYPE) {

            @Override
            public String getValue(T entry) {
                return toUppercaseFully(entry.getType());
            }
        };
        typeCol.setSortable(sortable);
        this.addColumn(typeCol, "Type");
        this.setColumnWidth(typeCol, 100, Unit.PX);
        return typeCol;
    }

    protected DataTableColumn<EntryData> addPartIdColumn(boolean sortable) {

        DataTableColumn<EntryData> partIdColumn = new DataTableColumn<EntryData>(
                new PartIDCell<EntryData>(), ColumnField.PART_ID) {

            @Override
            public EntryData getValue(T object) {
                return object;
            }
        };

        this.setColumnWidth(partIdColumn, 100, Unit.PX);
        partIdColumn.setSortable(sortable);
        this.addColumn(partIdColumn, "Part ID");
        return partIdColumn;
    }

    protected DataTableColumn<String> addNameColumn() {
        DataTableColumn<String> nameColumn = new DataTableColumn<String>(new TextCell(),
                ColumnField.NAME) {

            @Override
            public String getValue(T object) {
                return object.getName();
            }
        };

        this.addColumn(nameColumn, "Name");
        this.setColumnWidth(nameColumn, 150, Unit.PX);
        return nameColumn;
    }

    protected DataTableColumn<String> addSummaryColumn() {
        DataTableColumn<String> summaryColumn = new DataTableColumn<String>(new TextCell(),
                ColumnField.SUMMARY) {

            @Override
            public String getValue(T object) {
                // TODO : limit length of returned string
                return object.getSummary();
            }
        };

        this.addColumn(summaryColumn, "Summary");
        return summaryColumn;
    }

    protected DataTableColumn<String> addOwnerColumn() {
        DataTableColumn<String> ownerColumn = new DataTableColumn<String>(new ClickableTextCell(),
                ColumnField.OWNER) {

            @Override
            public String getValue(T object) {
                // TODO Auto-generated method stub
                return "Click";
            }
        };

        ownerColumn.setFieldUpdater(new FieldUpdater<T, String>() {

            @Override
            public void update(int index, T object, String value) {
                Window.alert("history : " + object.getOwnerId());
            }
        });

        this.addColumn(ownerColumn, "Owner");
        return ownerColumn;

        //        URLColumn<T> column = new URLColumn<T>();
        //
        //        this.addColumn(column, "Owner");
        //        this.setColumnWidth(column, 180, Unit.PX);
    }

    protected DataTableColumn<String> addStatusColumn() {
        DataTableColumn<String> statusColumn = new DataTableColumn<String>(new TextCell(),
                ColumnField.STATUS) {

            @Override
            public String getValue(T object) {
                return toUppercaseFully(object.getStatus());
            }
        };

        this.addColumn(statusColumn, "Status");
        this.setColumnWidth(statusColumn, 110, Unit.PX);
        return statusColumn;
    }

    private String toUppercaseFully(String value) {
        if (value == null || value.isEmpty())
            return "";
        return (value.substring(0, 1).toUpperCase() + value.substring(1));
    }

    protected void addHasAttachmentColumn() {
        ImageColumn<T> column = new ImageColumn<T>(ImageColumn.Type.ATTACHMENT);
        this.addColumn(column, column.getHeader());
        this.setColumnWidth(column, 35, Unit.PX);
    }

    protected void addHasSampleColumn() {
        ImageColumn<T> column = new ImageColumn<T>(ImageColumn.Type.SAMPLE);
        this.addColumn(column, column.getHeader());
        this.setColumnWidth(column, 35, Unit.PX);
    }

    protected void addHasSequenceColumn() {
        ImageColumn<T> column = new ImageColumn<T>(ImageColumn.Type.SEQUENCE);
        this.addColumn(column, column.getHeader());
        this.setColumnWidth(column, 35, Unit.PX);
    }

    protected DataTableColumn<String> addCreatedColumn() {
        DataTableColumn<String> createdColumn = new DataTableColumn<String>(new TextCell(),
                ColumnField.CREATED) {

            @Override
            public String getValue(EntryData object) {

                DateTimeFormat format = DateTimeFormat.getFormat("MMM d, yyyy");
                Date date = new Date(object.getCreated());
                String value = format.format(date);
                if (value.length() >= 13)
                    value = (value.substring(0, 9) + "...");
                return value;
            }
        };

        createdColumn.setSortable(true);
        this.addColumn(createdColumn, "Created");
        this.setColumnWidth(createdColumn, 120, Unit.PX);
        return createdColumn;
    }

    //
    // inner classes
    //
    public class EntrySelection extends MultiSelectionModel<T> {

        private boolean allSelected;

        public EntrySelection() {
            super(new ProvidesKey<T>() {

                @Override
                public Long getKey(T item) {
                    return item.getRecordId();
                }
            });
        }

        public void setAllSelected(boolean b) {
            allSelected = b;
        }

        @Override
        public boolean isSelected(T object) {
            if (allSelected) {
                setSelected(object, true);
            }

            return super.isSelected(object);
        }
    }

    protected CheckboxCell createHeaderCell() {
        return new CheckboxCell(true, false) {
            @Override
            public void onBrowserEvent(Context context, Element parent, Boolean value,
                    NativeEvent event, ValueUpdater<Boolean> valueUpdater) {
                String type = event.getType();

                boolean enterPressed = "keydown".equals(type)
                        && event.getKeyCode() == KeyCodes.KEY_ENTER;
                if ("change".equals(type) || enterPressed) {
                    InputElement input = parent.getFirstChild().cast();
                    Boolean isChecked = input.isChecked();

                    if (isChecked) {
                        selectionModel.setAllSelected(true);
                        EntryDataTable.this.redraw();
                    } else {
                        selectionModel.clear();
                        selectionModel.setAllSelected(false);
                    }
                }
            }
        };
    }

    private class SelectionColumnHeader extends Header<Boolean> {

        public SelectionColumnHeader() {
            super(createHeaderCell());
        }

        @Override
        public Boolean getValue() {
            if (selectionModel.allSelected)
                return true;

            return !(selectionModel.getSelectedSet().isEmpty());
        }
    }
}
