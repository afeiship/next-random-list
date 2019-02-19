var nx = require('next-js-core2');
require('next-random');
require('../src/next-random-list');

test('nx.randomList', function() {
  function throwRandom() {
    nx.randomList(() => {
      return nx.random(1, 3);
    }, 10);
  }

  var result = nx.randomList(() => {
    return nx.random(1980, 1999);
  }, 5);

  console.log(result);

});
