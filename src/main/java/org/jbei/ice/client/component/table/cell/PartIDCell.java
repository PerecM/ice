package org.jbei.ice.client.component.table.cell;

import org.jbei.ice.client.component.TipViewContentFactory;
import org.jbei.ice.client.util.Utils;
import org.jbei.ice.shared.EntryData;

import com.google.gwt.cell.client.AbstractCell;
import com.google.gwt.cell.client.ValueUpdater;
import com.google.gwt.dom.client.Element;
import com.google.gwt.dom.client.NativeEvent;
import com.google.gwt.safehtml.shared.SafeHtmlBuilder;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.PopupPanel;
import com.google.gwt.user.client.ui.Widget;

/**
 * Cell for part Id column values. Renders a url
 * that is has a popup on mouse over
 * 
 * @author Hector Plahar
 */

public class PartIDCell<T extends EntryData> extends AbstractCell<T> {

    private PopupPanel popup;
    private static final String MOUSEOVER_EVENT_NAME = "mouseover";
    private static final String MOUSEOUT_EVENT_NAME = "mouseout";
    private static final String MOUSEOVER_STYLE = "mouseover_color";

    public PartIDCell() {

        super(MOUSEOVER_EVENT_NAME, MOUSEOUT_EVENT_NAME);
    }

    @Override
    public void render(Context context, T view, SafeHtmlBuilder sb) {

        if (view == null || view.getPartId() == null)
            return;

        // entry/tip/4380
        sb.appendHtmlConstant("<a>" + view.getPartId() + "</a>");
    }

    @Override
    public void onBrowserEvent(Context context, Element parent, T value, NativeEvent event,
            ValueUpdater<T> valueUpdater) {

        super.onBrowserEvent(context, parent, value, event, valueUpdater);

        final String eventType = event.getType();

        if (MOUSEOVER_EVENT_NAME.equalsIgnoreCase(eventType)) {
            if (withinBounds(parent, event))
                onMouseOver(parent, event, value);
            else
                onMouseOut(parent);
        }

        if (MOUSEOUT_EVENT_NAME.equalsIgnoreCase(eventType)) {
            onMouseOut(parent);
        }
    }

    protected void onMouseOut(Element parent) {
        if (popup != null) {
            popup.hide();
            popup = null;
            Utils.showDefaultCursor(parent);
            parent.removeClassName(MOUSEOVER_STYLE);
        }
    }

    protected boolean withinBounds(Element parent, NativeEvent event) {

        if (event.getClientY() < ((Element) parent.getFirstChild()).getAbsoluteTop()) {
            return false;
        }

        if (event.getClientY() > ((Element) parent.getFirstChild()).getAbsoluteBottom()) {
            return false;
        }

        if (event.getClientX() < ((Element) parent.getFirstChild()).getAbsoluteLeft()) {
            return false;
        }

        if (event.getClientX() > ((Element) parent.getFirstChild()).getAbsoluteRight()) {
            return false;
        }

        return true;
    }

    protected void onMouseOver(Element parent, NativeEvent event, EntryData value) {

        parent.setClassName(MOUSEOVER_STYLE);
        Utils.showPointerCursor(parent);
        final int x = event.getClientX() + 30 + Window.getScrollLeft();
        final int y = event.getClientY() + Window.getScrollTop();

        popup = new PopupPanel(true);
        popup.setStyleName("popup");

        Widget contents = getTipViewContents(value); // TipViewContentFactory.getContents(value);
        popup.add(contents);

        int bounds = 450 + y; // 450 is expected height of popup. adjust accordingly or the bottom will be hidden
        int yPos = y;
        if (bounds > Window.getClientHeight()) {
            // move it up;
            yPos -= (bounds - Window.getClientHeight());
            if (yPos < 0)
                yPos = 0;
        }
        popup.setPopupPosition(x, yPos);
        popup.show();
    }

    protected Widget getTipViewContents(EntryData value) {
        return TipViewContentFactory.getContents(value);
    }
}
