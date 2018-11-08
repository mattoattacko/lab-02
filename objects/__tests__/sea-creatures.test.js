'use strict';

const SeaCreature = require('../sea-creatures-class.js');

describe('Sea Creature', () => {

  describe('hawaiiFish', () => {

    let fish = new SeaCreature.Fish('humuhumunukunukuapuaa');
    
    it('has antennae', () => {
      expect(fish.antennae).toEqual(false);
    });
  
    it('is dangerous', () => {
      expect(fish.dangerous()).toEqual('Only if you are coral');
    });
  
    it('might be tasty', () => {
      expect(fish.tasty()).toEqual('illegal to catch');
    });
  
    it('has no pinchers', () => {
      expect(fish.pinch).toBeUndefined();
    });
  });

  describe('Lobster', () => {
  
    let lobster = new SeaCreature.Lobster('Tamatoa');

    it('has antennae', () => {
      expect(lobster.antennae).toEqual(true);
    });
  
    it('is dangerous', () => {
      expect(lobster.dangerous).toEqual('Only if you are shiny!');
    });
  
    it('is tasty', () => {
      expect(lobster.tasty()).toBeTruthy();
    });
  
    it('pinches your fingers', () => {
      expect(lobster.pinch()).toEqual(true);
    });
  });
});