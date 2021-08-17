const { expect } = require('@jest/globals')
const caesarCipher = require("./ceaser");

test("should encrypt according to ceaserCipher", () => {
  expect(caesarCipher("what a wonderful day", 3)).toMatch("zkdw d zrqghuixo gdb");
});