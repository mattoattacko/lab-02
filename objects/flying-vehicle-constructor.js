'use strict';

const FlyingVehicle = function(name, flyAcrossPacific) {
  this.name = name;
  this.flyAcrossPacific = flyAcrossPacific;
};

FlyingVehicle.prototype.takeoffSafely = () => {
  return 'took off safely';
};

FlyingVehicle.prototype.flySafely = () => {
  return 'flying safely';
};

FlyingVehicle.prototype.landSafely = () => {
  return 'landed safely';
};

// Airplane Constructor

const Airplane = function(name) {
  FlyingVehicle.call(this, name, 'true');
};
Airplane.prototype = new FlyingVehicle(); 

// Use Johns demo constructors from car and motorcycle

// Helioptor Constructor

const Helicoptor = function(name) {
  FlyingVehicle.call(this, name, 'false');
};

Helicoptor.prototype = new FlyingVehicle();

Helicoptor.prototype.crewCapacity = () => {
  return '10';
};

module.exports = { Airplane, Helicoptor };