package org.jbei.ice.lib.parsers;

import org.jbei.ice.lib.models.Sequence;

public class ApeParser extends GenbankParser {
    private static final String APE_PARSER = "Ape";

    @Override
    public String getName() {
        return APE_PARSER;
    }

    @Override
    public Sequence parse(String textSequence) throws InvalidFormatParserException {
        return super.parse(textSequence);
    }
}