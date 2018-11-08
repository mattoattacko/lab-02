'use strict';

// Use the same format used in demo

class FlyingVehicle {
  constructor(name, flyAcrossPacific) {
    this.name = name;
    this.flyAcrossPacific = flyAcrossPacific;
  }
  takeoffSafely() {
    return 'Have a safe trip!';
  }
  flySafely() {
    return 'Flying safely!'; 
  }
  landSafely() {
    return 'I landed safely!';
  }
}

// Use super(); to get it to attach to the original class 

class Airplane extends FlyingVehicle {
  constructor(name) {
    super();
    this.name = name;
    this.flyAcrossPacific = true;
  }
}

class Helicopter extends FlyingVehicle {
  constructor(name) {
    super();
    this.name = name;
    this.flyAcrossPacific = false;
    // this.crewCapacity = '10';
  }
  crewCapacity () {
    return '10';
  }
//  test both imo
}

module.exports = { Airplane, Helicopter };