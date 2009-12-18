package org.jbei.ice.web.forms;

import java.util.ArrayList;
import java.util.LinkedHashMap;

import org.apache.wicket.behavior.SimpleAttributeModifier;
import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.markup.html.form.Button;
import org.apache.wicket.markup.html.form.CheckBox;
import org.apache.wicket.markup.html.form.ChoiceRenderer;
import org.apache.wicket.markup.html.form.DropDownChoice;
import org.apache.wicket.markup.html.form.Form;
import org.apache.wicket.markup.html.form.StatelessForm;
import org.apache.wicket.markup.html.form.TextArea;
import org.apache.wicket.markup.html.form.TextField;
import org.apache.wicket.markup.html.list.ListItem;
import org.apache.wicket.markup.html.list.ListView;
import org.apache.wicket.markup.html.panel.Panel;
import org.apache.wicket.model.CompoundPropertyModel;
import org.apache.wicket.model.Model;
import org.apache.wicket.model.PropertyModel;
import org.jbei.ice.lib.logging.Logger;
import org.jbei.ice.lib.managers.EntryManager;
import org.jbei.ice.lib.managers.ManagerException;
import org.jbei.ice.lib.models.Link;
import org.jbei.ice.lib.models.Name;
import org.jbei.ice.lib.models.Plasmid;
import org.jbei.ice.lib.models.SelectionMarker;

public class PlasmidUpdateFormPanel extends Panel {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Plasmid plasmid = null;
	
	public PlasmidUpdateFormPanel(String id, Plasmid plasmid) {
		super(id);
		this.setPlasmid(plasmid);
		populateElements();
	}

	private void populateElements() {
		class PlasmidForm extends StatelessForm<Object> {

			private static final long serialVersionUID = 1L;
			
			//entry fields
			private String links;
			private String names;
			private String selectionMarkers;
			private String alias;
			private String creator;
			private String creatorEmail;
			private String status;
			private String visibility;
			private String keywords;
			private String summary;
			private String notes;
			private String references;
			
			//plasmid only fields
			private String backbone;
			private String originOfReplication;
			private String promoters;
			private boolean circular = true;
			
			public PlasmidForm(String id) {
				
				super(id);
				
				setLinks(plasmid.getLinksAsString());
				setNames(plasmid.getNamesAsString());
				setSelectionMarkers(plasmid.getSelectionMarkersAsString());
				setAlias(plasmid.getAlias());
				setCreator(plasmid.getCreator());
				setCreatorEmail(plasmid.getCreatorEmail());
				setStatus(plasmid.getStatus());
				setVisibility("" + plasmid.getVisibility());
				setKeywords(plasmid.getKeywords());
				setSummary(plasmid.getShortDescription());
				setNotes(plasmid.getLongDescription());
				setReferences(plasmid.getReferences());
				
				setBackbone(plasmid.getBackbone());
				setOriginOfReplication(plasmid.getOriginOfReplication());
				setPromoters(plasmid.getPromoters());
				setCircular(plasmid.getCircular());
				
				setModel(new CompoundPropertyModel<Object>(this));
				add(new TextField<String>("names")
						.setRequired(true));
				add(new TextField<String>("links"));
				add(new TextField<String>("selectionMarkers"));
				add(new TextField<String>("alias"));
				add(new TextField<String>("creator"));
				add(new TextField<String>("creatorEmail"));
				
				ArrayList<CustomChoice> statusChoices = new ArrayList<CustomChoice>();
				CustomChoice defaultStatus = new CustomChoice("Planned", "planned" ); 
				statusChoices.add(defaultStatus);
				statusChoices.add(new CustomChoice("Complete", "complete" ));
				statusChoices.add(new CustomChoice("In Progress", "in progress" ));
				add(new DropDownChoice<CustomChoice>("status", 
						new Model<CustomChoice>(defaultStatus), statusChoices,
						new ChoiceRenderer<CustomChoice>("getName", "getValue")));
				
				ArrayList<CustomChoice> visibilityChoices = new ArrayList<CustomChoice>();
				CustomChoice defaultVisibility = new CustomChoice("Public", "9" ); 
				visibilityChoices.add(defaultVisibility);
				visibilityChoices.add(new CustomChoice("Hidden", "5" ));
				visibilityChoices.add(new CustomChoice("Private", "0" ));
				add(new DropDownChoice<CustomChoice>("visibility", 
						new Model<CustomChoice>(defaultVisibility), visibilityChoices,
						new ChoiceRenderer<CustomChoice>("getName", "getValue")));
				
				add(new TextField<String>("keywords"));
				add(new TextArea<String>("summary").setRequired(true));
				add(new TextArea<String>("notes"));
				add(new TextArea<String>("references"));
				add(new TextField<String>("backbone"));
				add(new TextField<String>("originOfReplication"));
				add(new TextField<String>("promoters"));
				
				add(new CheckBox("circular"));
				
			}
			
			protected void onSubmit() {
				try {
					CommaSeparatedField<Link> linksField = new CommaSeparatedField<Link>(Link.class, "getLink", "setLink");
					linksField.setString(getLinks());
					plasmid.setLinks(linksField.getItemsAsSet());
				
					CommaSeparatedField<Name> namesField = new CommaSeparatedField<Name>(Name.class, "getName", "setName");
					namesField.setString(getNames());
					plasmid.setNames(namesField.getItemsAsSet());
					
					CommaSeparatedField<SelectionMarker> selectionMarkersField = new CommaSeparatedField<SelectionMarker>(SelectionMarker.class, "getName", "setName");
					selectionMarkersField.setString(getSelectionMarkers());
					plasmid.setSelectionMarkers(selectionMarkersField.getItemsAsSet());
				
				} catch (FormException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				
				plasmid.setAlias(getAlias());
				plasmid.setStatus(getStatus());
				plasmid.setVisibility(Integer.parseInt(getVisibility()));
				plasmid.setKeywords(getKeywords());
				plasmid.setShortDescription(getSummary());
				plasmid.setLongDescription(getNotes());
				plasmid.setReferences(getReferences());
				
				plasmid.setBackbone(getBackbone());
				plasmid.setOriginOfReplication(getOriginOfReplication());
				plasmid.setPromoters(getPromoters());
				plasmid.setCircular(getCircular());
				
				try {
					EntryManager.save(plasmid);
				} catch (ManagerException e) {
					// TODO Auto-generated catch block
					String msg = "System Error: Could not save! ";
					Logger.error(msg + e.getMessage());
					error(msg);
					e.printStackTrace();
				}
				
			}
			
			protected void onError() {
				
			}
			
			// Getters and setters for PlasmidForm
			
			public void setLinks(String links) {
				this.links = links;
			}
			public String getLinks() {
				return links;
			}
			public void setNames(String names) {
				this.names = names;
			}
			public String getNames() {
				return names;
			}
			public void setSelectionMarkers(String selectionMarkers) {
				this.selectionMarkers = selectionMarkers;
			}
			public String getSelectionMarkers() {
				return selectionMarkers;
			}
			public String getAlias() {
				return alias;
			}
			public void setAlias(String alias) {
				this.alias = alias;
			}
			public String getCreator() {
				return creator;
			}
			public void setCreator(String creator) {
				this.creator = creator;
			}
			public String getCreatorEmail() {
				return creatorEmail;
			}
			public void setCreatorEmail(String creatorEmail) {
				this.creatorEmail = creatorEmail;
			}
			public String getStatus() {
				return status;
			}
			public void setStatus(String status) {
				this.status = status;
			}
			public String getVisibility() {
				return visibility;
			}
			public void setVisibility(String visibility) {
				this.visibility = visibility;
			}
			public String getKeywords() {
				return keywords;
			}
			public void setKeywords(String keywords) {
				this.keywords = keywords;
			}
			public String getSummary() {
				return summary;
			}

			public void setSummary(String summary) {
				this.summary = summary;
			}
			public String getNotes() {
				return notes;
			}
			public void setNotes(String notes) {
				this.notes = notes;
			}
			public String getReferences() {
				return references;
			}
			public void setReferences(String references) {
				this.references = references;
			}
			public String getBackbone() {
				return backbone;
			}
			public void setBackbone(String backbone) {
				this.backbone = backbone;
			}
			public String getOriginOfReplication() {
				return originOfReplication;
			}
			public void setOriginOfReplication(String originOfReplication) {
				this.originOfReplication = originOfReplication;
			}

			public String getPromoters() {
				return promoters;
			}
			public void setPromoters(String promoters) {
				this.promoters = promoters;
			}
			public boolean getCircular() {
				return circular;
			}

			public void setCircular(boolean circular) {
				this.circular = circular;
			}
		}

		PlasmidForm form = new PlasmidForm("plasmidForm");
		form.add(new Button("submitButton"));
		add(form);

	}


	public void setPlasmid(Plasmid plasmid) {
		this.plasmid = plasmid;
	}

	public Plasmid getPlasmid() {
		return plasmid;
	}

}
