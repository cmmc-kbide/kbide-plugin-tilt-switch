Blockly.Blocks["tilt_switch_block"] = {
    init: function() {
      this.appendDummyInput().appendField("TILT SWITCH");
      this.appendDummyInput()
        .appendField("PIN")
        .appendField(new Blockly.FieldTextInput("0"), "TILT_SWITCH_PIN")
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("TILT_SWITCH_VALUE"),
          "TILT_SWITCH_VALUE"
        );
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };