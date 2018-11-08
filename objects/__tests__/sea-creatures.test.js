'use strict';

const SeaCreature = require('../sea-creatures-class.js');

describe('Sea Creature', () => {

  describe('Shark', () => {

    let shark = new SeaCreature.Shark('Tiger Shark');
    
    it('They have teeth', () => {
      expect(shark.teeth).toEqual(true);
    });
  
    it('Live in this ocean', () => {
      expect(shark.ocean).toEqual('Pacific');
    });
  
    it('They eat everything, like goats', () => {
      expect(shark.eat()).toBeTruthy();
    });
  
    it('They are the scariest sharks', () => {
      expect(shark.scary).toBeUndefined();
    });
  });

  describe('Jellyfish', () => {
  
    let jellyfish = new SeaCreature.JellyFish('Immortal Jellyfish');
    // console.log(jellyfish);

    it('Is biologically imortal', () => {
      expect(jellyfish.lifeSpan).toEqual(true);
    });
  
    it('Class is Hydrozoa', () => {
      expect(jellyfish.class).toEqual('Hydrozoa');
    });
  
    it('Is bell-shaped', () => {
      expect(jellyfish.shape()).toBeTruthy();
    });
  
    it('They are tiny', () => {
      expect(jellyfish.invertebrate()).toEqual('Only 4.5 milimeters in diameter');
    });
  });

});