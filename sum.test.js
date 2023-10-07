// //const sum = require('./sum');

 import {  forEach, caesar, capitalise, reverseString, calc } from './sum.js'


test('capitalise first character', () => {
  expect(capitalise("hello")).toMatch("Hello");
});


test('reverse string', () => {
  expect(reverseString("hello")).toMatch("olleh")
})

// calculator

test('calcAdd', () => {
  expect(calc.add(2,3)).toBe(5)
})

test('calcMultiply', () => {
  expect(calc.multiply(2,3)).toBe(6)
})

test('calcSubtract', () => {
  expect(calc.subtract(8, 4)).toBe(4)
})

test('calcDivide', () => {
  expect(calc.divide(6, 3)).toBe(2)
})

// caesar

test('shifted letters', () => {
  expect(caesar("hello", 1)).toMatch("ifmmp")
})

test('shifted a to z wrapping', () => {
  expect(caesar("aas", 15)).toMatch("pph")
})

test('shift one', () => {
  expect(caesar("Hello", 1)).toMatch("Ifmmp")
})

test('one upper-case wrapping', () => {
  expect(caesar("Zello", 1)).toMatch("Afmmp")
})

test('same case wrapping, lower', () => {
  expect(caesar("uvwxyz", 1)).toMatch("vwxyza")
})

test('different case wrapping', () => {
  expect(caesar("AzZBumNTyY", 5)).toMatch("FeEGzrSYdD")
})

test('different case wrapping - long', () => {
  expect(caesar("RlkZWcTZkaxUzltizGiKMgn", 17)).toMatch("IcbQNtKQbroLqckzqXzBDxe")
})      

test('different case wrapping, punctuation', () => {
  expect(caesar("Rl.kZWcTZkaxUzltizGiK,Mgn", 17)).toBe("Ic.bQNtKQbroLqckzqXzB,Dxe")
})                                                     



//const forEach = require('./forEach');

const mockCallback = jest.fn(x => 42 + x);

test('forEach mock function', () => {
  forEach([0, 1], mockCallback);

  // The mock function was called twice
  expect(mockCallback.mock.calls).toHaveLength(2);

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[1].value).toBe(43);
});