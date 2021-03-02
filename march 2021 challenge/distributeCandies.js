/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  var set = new Set(candyType);
  return Math.min(set.size, candyType.length / 2);
};
