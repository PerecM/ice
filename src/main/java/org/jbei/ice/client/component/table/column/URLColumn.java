package org.jbei.ice.client.component.table.column;

import org.jbei.ice.shared.EntryData;

import com.google.gwt.cell.client.SafeHtmlCell;
import com.google.gwt.core.client.GWT;
import com.google.gwt.safehtml.shared.SafeHtml;
import com.google.gwt.safehtml.shared.SafeHtmlUtils;
import com.google.gwt.user.cellview.client.Column;

public class URLColumn<T extends EntryData> extends Column<T, SafeHtml> {

    public URLColumn() {
        super(new SafeHtmlCell());
    }

    @Override
    public SafeHtml getValue(T object) {
        String moduleBase = GWT.getModuleBaseURL();
        int index = moduleBase.indexOf("/", ("https://".length() + 1));
        String urlBase = moduleBase.substring(0, index);
        String url = urlBase + "/profile/about/" + object.getOwnerId();
        return SafeHtmlUtils.fromSafeConstant("<a href=\"javascript:parent.window.location='" + url
                + "'\">" + object.getOwner() + "</a>");
    }
}
