'use strict';

// Repeat the process, from scratch, implementing a SeaCreature parent class, with Fish and Lobster child classes.

class SeaCreature {
  constructor(name, antennae) {
    this.name = name;
    this.antennae = antennae;
  }
  dangerous () {
    return 'sometimes';
  }
  tasty () {
    return 'almost always';
  }
}

// Fish & Lobster

class Fish extends SeaCreature {
  constructor(name) {
    super();
    this.name = name;
    this.antennae = 'No';
  }
}

class Lobster extends SeaCreature {
  constructor(name) {
    super();
    this.name = name;
    this.antennae = 'Yes';
  }
  pinch () {
    return 'PINCH ALL THE THINGS';
  }
}

module.exports = { Fish, Lobster };