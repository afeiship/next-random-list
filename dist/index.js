/*!
 * name: @jswork/next-random-list
 * description: Random list(array) for next.
 * homepage: https://github.com/afeiship/next-random-list
 * version: 1.0.0
 * date: 2021-02-17 15:24:09
 * license: MIT
 */

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var MAX_ERROR_MSG = 'Iterator has error!';

  nx.randomList = function (inIterator, inLength, inMax) {
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
