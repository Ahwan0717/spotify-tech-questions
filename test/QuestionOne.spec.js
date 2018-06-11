var assert = require('assert');
var sortByStrings = require('../QuestionOne')

describe('Question 1', function() {
  it('sorts weather', function() {
    assert.equal( sortByStrings('weather', 'therapyw') , 'theeraw');
  });
  it('sorts good', function() {
    assert.equal( sortByStrings('good', 'odg') , 'oodg');
  });
});