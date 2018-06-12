var assert = require('assert');
var changePossibilities = require('../solutions/QuestionThree')

describe('Question 3', function() {
  it('finds the change possibilities', function() {
    assert.equal( changePossibilities(4, [1,2,3]) , '4');
  });
});