'use strict';

class Vehicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }

  //   Vehicle.prototype.drive = () => {
  //     return 'Moving Forward';
  //   };
  
  //   Vehicle.prototype.stop = () => {
  //     return 'Stopping';
  //   };

  // Can't get vehicle.prototype to work at all. Testing other return method.

  drive() {
    return 'Moving Forward'; 
  }

  stop() {
    return 'Stopping';
  }
}

// Seems fine? Use extends like video and build off the same constructor John made

class Car extends Vehicle {
  constructor(name) {
    super();
    this.name = name;
    this.wheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(name) {
    super();
    this.name = name;
    this.wheels = 2;
  }
  wheelie() {
    return 'Wheee!';
  }
}

module.exports = { Car, Motorcycle };