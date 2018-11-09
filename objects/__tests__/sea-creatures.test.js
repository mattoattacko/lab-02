'use strict';

const SeaCreature = require('../sea-creatures-class.js');

describe('Sea Creature', () => {

  describe('hawaiiFish', () => {

    let fish = new SeaCreature.Fish('humuhumunukunukuapuaa');
    
    it('has antennae', () => {
      expect(fish.antennae).toEqual('No');
    });
  
    it('is dangerous', () => {
      expect(fish.dangerous()).toEqual('sometimes');
    });
  
    it('might be tasty', () => {
      expect(fish.tasty()).toEqual('almost always');
    });
  
    it('has no pinchers', () => {
      expect(fish.pinch).toBeUndefined();
    });
  });

  describe('Lobster', () => {
  
    let lobster = new SeaCreature.Lobster('Tamatoa');

    it('has antennae', () => {
      expect(lobster.antennae).toEqual('Yes');
    });
  
    it('is dangerous', () => {
      expect(lobster.dangerous()).toEqual('sometimes');
    });
  
    it('is tasty', () => {
      expect(lobster.tasty()).toBeTruthy();
    });
  
    it('pinches your fingers', () => {
      expect(lobster.pinch()).toEqual('PINCH ALL THE THINGS');
    });
  });
});