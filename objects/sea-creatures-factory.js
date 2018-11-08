'use strict';

// Requirements: Implement both Fish and Lobster using a Javascript Factory Function 

const SeaCreature = () => ({
  dangerous: () => {
    return ('It depends');
  },
  tasty: () => {
    return ('Almost always tasty');
  },
});

function Fish() {
  let antennae = 'No';
  let fish = Object.assign( {}, { name }, { antennae }, SeaCreature());
  return fish;
}

function Lobster() {
  let antennae = 'Yes';
  let lobster = Object.assign( {}, { name }, { antennae }, { pinch }, SeaCreature());
  function pinch() {
    return ('Tamatoa will pinch you!');}
  return Object.freeze(lobster);
}

module.exports = { Fish, Lobster };