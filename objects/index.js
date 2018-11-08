'use strict';

// As you do your work, other than changing the require() lines in both the index.js and the test files, both the index.js and the tests should work unchanged. Do not change the actual test or index code!

const Vehicle = require('./constructor.js');
// const Vehicle = require('./class.js');
// const Vehicle = require('./factory.js');

// Implement car and motorcycle
const nissan = new Vehicle.Car('GTR');
console.log(nissan.name, nissan.drive(), nissan.stop());

const arch = new Vehicle.Motorcycle('Arch'); // Fun fact! Arch motorcycles is co-owned by Keanu Reeves!
console.log(arch.name, arch.wheelie(), arch.stop());

const FlyingVehicle = require('./flying-vehicle-constructor.js');
// const FlyingVehicle = require('./flying-vehicle-class.js');
// const FlyingVehicle = require('./flying-vehicle-factory.js');

const airplane = new FlyingVehicle.Airplane('JAL'); // JAL = Japan Airlines
console.log(airplane.name, airplane.flyAcrossPacific, airplane.takeoffSafely, airplane.flySafely(), airplane.landSafely());

const helicopter = new FlyingVehicle.Helicopter('Black Hawk');
console.log(helicopter.name, helicopter.flyAcrossPacific, helicopter.takeoffSafely, helicopter.flySafely, helicopter.landSafely(). helicopter.crewCapacity());

const SeaCreature = require('./sea-creatures-constructor.js');
// const FlyingVehicle = require('./sea-creatures-class.js');
// const FlyingVehicle = require('./sea-creatures-factory.js');

//  Implement fish and lobster
const hawaiiFish = new SeaCreature.hawaiiFish('humuhumunukunukuapuaa');
console.log(hawaiiFish.name, hawaiiFish.dangerous(), hawaiiFish.tasty());

const moanaLobster = new SeaCreature.moanaLobster('Tamatoa');
console.log(moanaLobster.name, moanaLobster.dangerous(), moanaLobster.pinch());