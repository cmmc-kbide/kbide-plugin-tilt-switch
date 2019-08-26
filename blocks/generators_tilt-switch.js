Blockly.JavaScript["tilt_switch_block"] = function(block) {
    var text_tilt_switch_pin = block.getFieldValue("TILT_SWITCH_PIN");
    var variable_tilt_switch_value = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("TILT_SWITCH_VALUE"),
      Blockly.Variables.NAME_TYPE
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `
	#VARIABLE
	int TILT_SWITCH_PIN = ${text_tilt_switch_pin}; // Definition of mercury tilt switch sensor interface
	#END

	#SETUP
	pinMode(TILT_SWITCH_PIN, INPUT);
	#END

	${variable_tilt_switch_value} = digitalRead(TILT_SWITCH_PIN); // check mercury switch state
    `;
    return code;
  };