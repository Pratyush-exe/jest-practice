const { expect } = require('@jest/globals')
const calculator = require('./calculator')

test("should add", () => {
  expect(calculator.add(1,2)).toBe(3);
});

test("should substract", () => {
  expect(calculator.sub(10, 5)).toBe(5);
});

test("should divide", () => {
  expect(calculator.div(9, 3)).toBe(3);
});

test("should multiply", () => {
  expect(calculator.mul(2, 3)).toBe(6);
});