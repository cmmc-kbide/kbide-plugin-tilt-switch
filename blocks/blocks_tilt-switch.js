Blockly.Blocks['tilt_switch_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TILT SWITCH");
    this.appendValueInput("TILT_SWITCH_PIN")
        .setCheck("Number")
        .appendField("SWITCH PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};