const { expect } = require('@jest/globals')
const capitalize = require('./capitalize')

test('should capitalize the string', () => {
    expect(capitalize("abcdef")).toMatch("ABCDEF")
})
