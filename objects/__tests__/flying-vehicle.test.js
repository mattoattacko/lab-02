'use strict';

const FlyingVehicle = require('../flying-vehicle-class.js');

describe('FlyingVehicles', () => {

  describe('Airplane', () => {

    let airplane = new FlyingVehicle.Airplane('JAL');

    it('JAL can fly from Hawaii to Japan, no problem!', () => {
      expect(airplane.flyAcrossPacific).toEqual(true);
    });

    it('It can takeoff safely', () => { 
      expect(airplane.takeoffSafely()).toBeTruthy();
    });

    it('It can fly safely', () => {
      expect(airplane.flySafely()).toBeTruthy();
    });

    it('It can land safely', () => {
      expect(airplane.landSafely()).toBeTruthy();
    });
  });
  
  describe('Helicopter', () => {   
    
    // North Carolinaaaaaa c'mon and raise up. Take your shirt off, twist it 'round yo' hand. Spin it like a helicopter!
      
    let helicopter = new FlyingVehicle.Helicopter('Black Hawk');

    it('The Black Hawk can fly 1,200 nautical miles. The distance from Tokyo, Japan to Honolulu, Hawaii is 3,345 nautical miles. A difference of 2,145 nautical miles. I think it\'s fair to assume we would not make it from Hawaii to Japan aboard a Black Hawk helicopter.', () => {
      expect(helicopter.flyAcrossPacific).toEqual(false);
    });

    it('It can takeoff safely...unless under enemy fire', () => {
      expect(helicopter.takeoffSafely()).toBeTruthy();
    });

    it('It can fly safely...unless there is a slight breeze', () => { 
      expect(helicopter.flySafely()).toBeTruthy();
    });

    it('It can land safely atleast 73% of the time!', () => { 
      expect(helicopter.landSafely()).toBeTruthy();
    });

    it('It can hold about 10 well equipped crewmen', () => { 
      expect(helicopter.crewCapacity()).toEqual('10');
    });
  });
});