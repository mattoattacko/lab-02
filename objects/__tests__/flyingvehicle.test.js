const Vehicle = require('../vehicle-class.js');

describe('Vehicles', () => {

    describe('FlyingVehicle', () => {

    describe('Airplane', () => {
      let airplane = new Vehicle.Airplane('JAL');
      // console.log(airplane);
      it('It has 100 passengers', () => {
        expect(airplane.passengers).toEqual(100);
      });
      it('It can takeoff', () => {
        expect(airplane.takeoff()).toBeTruthy();
      });
      it('It can fly', () => {
        expect(airplane.fly()).toBeTruthy();
      });
      it('It can land', () => {
        expect(airplane.land()).toBeTruthy();
      });
      it('Offers a first class upgrade', () => {
        expect(airplane.firstClass).toEqual(true);
      });
    });
  
    describe('Helicopter', () => {
      let helicopter = new Vehicle.Helicopter('Apache');
    //   console.log(helicopter);
      it('It has 8 passengers', () => {
        expect(helicopter.passengers).toEqual(8);
      });
      it('It can takeoff', () => {
        expect(helicopter.takeoff()).toBeTruthy();
      });
      it('It can fly', () => {
        expect(helicopter.fly()).toBeTruthy();
      });
      it('It can land', () => {
        expect(helicopter.land()).toBeTruthy();
      });
      it('Offers a first class upgrade', () => {
        expect(helicopter.firstClass).toEqual(false);
      });
    });
});