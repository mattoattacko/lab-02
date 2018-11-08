'use strict';

// Implement both Car and Motorcycle using a Javascript Factory Function (in the vehicle-factory.js file)

const FlyingVehicle = () => ({
  takeoffSafely: () => {
    return ('Took off safely');
  },
  flySafely: () => {
    return ('Flying safely');
  },
  landSafely: () => {
    return ('Landed safely');
  },
});

function Airplane() {
  let flyAcrossPacific = 'True';
  let airplane = Object.assign( {}, { name }, { flyAcrossPacific }, FlyingVehicle());
  return airplane;
}

function Helicopter() {
  let flyAcrossPacific = 'False';
  let helicopter = Object.assign( {}, { name }, { flyAcrossPacific }, { crewCapacity }, FlyingVehicle());

  function crewCapacity() {
    return ('Typical crew size of 10 well equiped operators');}
  return Object.freeze(helicopter);  // .freeze?
}

module.exports = { Airplane, Helicopter };