package org.jbei.ice.web.panels;

import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.markup.html.panel.Panel;

public class EmptyMessagePanel extends Panel {

    private static final long serialVersionUID = 1L;

    public EmptyMessagePanel(String id, String msg) {
        super(id);
        add(new Label("msg", msg));
    }

}