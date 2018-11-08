'use strict';

const SeaCreature = function(name, antennae) {
  this.name = name;
  this.antennae = antennae;
};

SeaCreature.prototype.dangerous = () => {
  return 'sometimes dangerous';
};

SeaCreature.prototype.tasty = () => {
  return 'So Yummy!';
};

// Fish Constructor

const Fish = function(name) {
  SeaCreature.call(this, name, 'False');
};
Fish.prototype = new SeaCreature(); 

// Use Johns demo constructors from car and motorcycle

// Lobster Constructor

const Lobster = function(name) {
  SeaCreature.call(this, name, 'True');
};

Lobster.prototype = new SeaCreature();

Lobster.prototype.pinch = () => {
  return 'I PEEEENCH!';
};

module.exports = { Fish, Lobster };