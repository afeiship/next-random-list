const { expect } = require('@jest/globals');

(function () {
  require('../src');
  require('@jswork/next-random');

  describe('api.basic test', () => {
    test('nx.randomList should get length item by size', function () {
      var count = 5;
      var map = {};
      var result = nx.randomList(() => {
        return nx.random(1980, 1999);
      }, count);
      result.forEach((item) => (map[item] = true));

      expect(result.length).toBe(count);
      expect(Object.keys(map).length).toBe(count);
    });
  });
})();
