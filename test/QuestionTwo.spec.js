var assert = require('assert');
var decodeString = require('../solutions/QuestionTwo')

describe('Question 2', function() {
  it('decodes 4[ab]', function() {
    assert.equal( decodeString('4[ab]') , 'abababab');
  });
  it('decodes 2[b3[a]]', function() {
    assert.equal( decodeString('2[b3[a]]') , 'baaabaaa');
  });
});