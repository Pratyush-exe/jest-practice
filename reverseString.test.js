const { expect } = require('@jest/globals')
const reverseString = require('./reverseString')

test('should reverse the string', () => {
    expect(reverseString("abcdef")).toMatch("fedcba")
})
