'use strict';

// These 2 should be interchangeable!
const List = require('../list.js');
// const List = require('../list-constructor.js');

// Create a new folder in the lab directory called list to house your code for this assignment
// implement a full List constructor using a constructor function
// implement the .length property
// implement the following methods on the list constructor
// push()
// pop()
// shift()
// unshift()
// splice()
// slice()
// Do not use any built-in array methods to do this

// unsure on implimentation ask John later


describe('List Data Structure', () => {

  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

});
