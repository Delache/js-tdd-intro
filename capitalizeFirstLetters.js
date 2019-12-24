
// capitalizeFirst.string.js
const assert = require('assert');
const capitalizeFirst = require('../capitalizeFirst');

describe('capitalizeFirst', () => {
  it('is a function that accepts one argument', () => {
    assert.strictEqual(typeof capitalizeFirst, 'function');
    assert.strictEqual(capitalizeFirst.length, 1);
  });
  it('transforms javaScript correctly', () => {
    assert.strictEqual(capitalizeFirst('javaScript'), 'JavaScript');
  });
  it('works for a 1-character string', () => {
    assert.strictEqual(capitalizeFirst('a'), 'A');
  });
  it('works for an empty string', () => {
    assert.strictEqual(capitalizeFirst(''), '');
  });
});

function capitalizeFirstLetters(string) {
  if (string.length > 0) {
    string = string.split(" ");
    for (let i = 0; i < string.length; i++) {
      string[i] = string[i][0].toUpperCase()+string[i].substr(1);
    }
    return string.join(' ');
  } else {
    return '';
  }
} 