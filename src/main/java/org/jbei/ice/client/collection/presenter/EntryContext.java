package org.jbei.ice.client.collection.presenter;

import org.jbei.ice.client.common.IHasNavigableData;
import org.jbei.ice.shared.ColumnField;

public class EntryContext {

    private long current;
    private Type type;
    private ColumnField sortColumn;
    private boolean asc;
    private IHasNavigableData nav;

    public EntryContext(Type type) {
        this.setType(type);
    }

    public long getCurrent() {
        return current;
    }

    public void setCurrent(long current) {
        this.current = current;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public ColumnField getSortColumn() {
        return sortColumn;
    }

    public void setSortColumn(ColumnField sortColumn) {
        this.sortColumn = sortColumn;
    }

    public boolean isAsc() {
        return asc;
    }

    public void setAsc(boolean asc) {
        this.asc = asc;
    }

    public IHasNavigableData getNav() {
        return nav;
    }

    public void setNav(IHasNavigableData nav) {
        this.nav = nav;
    }

    public enum Type {
        SEARCH, COLLECTION, SAMPLES;
    }
}