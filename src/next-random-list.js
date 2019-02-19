(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var MAX_ERROR_MSG = 'Iterator has error!';

  nx.randomList = function(inIterator, inLength, inMax) {
    var result = [];
    var random = inIterator();
    var counter = 1;
    var max = inMax || 10000;

    while (result.length < inLength) {
      if (counter < max) {
        if (result.indexOf(random) === -1) {
          result.push(random);
        } else {
          random = inIterator();
          counter++;
        }
      } else {
        nx.error(MAX_ERROR_MSG);
      }
    }
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.randomList;
  }
})();
