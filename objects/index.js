'use strict';


const Vehicle = require('./constructor.js');
// const Vehicle = require('./class.js');
// const Vehicle = require('./factory.js');

// Implement a car and motorcycle
const nissan = new Vehicle.Car('GTR');
console.log(nissan.name, nissan.drive(), nissan.stop());

const arch = new Vehicle.Motorcycle('Arch');
console.log(arch.name, arch.wheelie(), arch.stop());

const plane = new Vehicle.Airplane('JAL');
console.log(plane.name, plane.passengers, plane.privatelyOwned, plane.firstClass(), plane.takeoff());

const heli = new Vehicle.Helicopter('Black Hawk');
console.log(heli.name, heli.passengers, heli.privatelyOwned, heli.takeoff());
