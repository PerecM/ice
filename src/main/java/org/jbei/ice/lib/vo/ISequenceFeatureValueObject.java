package org.jbei.ice.lib.vo;

import org.jbei.ice.lib.models.Feature;
import org.jbei.ice.lib.models.Sequence;

public interface ISequenceFeatureValueObject {
    void setId(int id);

    int getId();

    ISequenceValueObject getSequence();

    void setSequence(Sequence sequence);

    Feature getFeature();

    void setFeature(Feature feature);

    int getStart();

    void setStart(int start);

    int getEnd();

    void setEnd(int end);

    int getStrand();

    void setStrand(int strand);

    String getName();

    void setName(String name);
}