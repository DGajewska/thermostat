function Thermostat() {
  this._temperature = 20;
  this._minimumTemperature = 10;
  this._maximumTemperature = 25;
  this._powerSavingMode = true;
}
Thermostat.prototype.reading = function() {
  return this._temperature;
}
Thermostat.prototype.up = function () {
  if(this._temperature < this._maximumTemperature) {
    this._temperature++;
  }
};
Thermostat.prototype.down = function () {
  if(this._temperature > this._minimumTemperature) {
    this._temperature--;
  }
};
Thermostat.prototype.powerSavingOn = function () {
  this._maximumTemperature = 25;
  this._powerSavingMode = true;
  if(this._temperature > 25) {
    this._temperature = 25;
  }
};
Thermostat.prototype.isPowerSavingOn = function() {
  return this._powerSavingMode === true;
};
Thermostat.prototype.powerSavingOff = function () {
  this._maximumTemperature = 32;
  this._powerSavingMode = false;
};
Thermostat.prototype.resetTemperature = function () {
  this._temperature = 20;
};
Thermostat.prototype.energyUsage = function () {
  if (this._temperature < 18) {
    return 'low-usage';
  } else if (this._temperature < 25) {
    return 'medium-usage';
  } else {
    return 'high-usage';
  }
};
