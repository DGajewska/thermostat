$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  updatePSM();
  energyUsageColour();

  $('#temp_up').click(function(){
    thermostat.up();
    updateTemperature();
    energyUsageColour();
  });

  $('#temp_down').click(function(){
    thermostat.down();
    updateTemperature();
    energyUsageColour();
  });

  $('#reset').click(function(){
    thermostat.resetTemperature();
    updateTemperature();
    energyUsageColour();
  })

  $('#psm_on').click(function(){
    thermostat.powerSavingOn();
    updateTemperature();
    updatePSM();
  })

  $('#psm_off').click(function(){
    thermostat.powerSavingOff();
    updateTemperature();
    updatePSM();
  })

  function updateTemperature() {
    $('.display').text(thermostat._temperature);
  }
  function updatePSM() {
    var psmMessage;
    if (thermostat._powerSavingMode) {
      psmMessage = "PSM is on";
      $('#psm_on').attr('class', 'button_grey');
      $('#psm_off').attr('class', 'button');
    } else {
      psmMessage = "PSM is off";
      $('#psm_off').attr('class', 'button_grey');
      $('#psm_on').attr('class', 'button');
    }
    $('.psm_text').text(psmMessage);
  }
  function energyUsageColour() {
    var colour;
    switch (thermostat.energyUsage()) {
      case 'low-usage':
        colour = 'green';
        break;
      case 'medium-usage':
        colour = 'orange';
        break;
      case 'high-usage':
        colour = 'red';
    }
    $('.energy_usage').text(thermostat.energyUsage())
    $('.energy_usage').css('background-color', colour);
  }
});
