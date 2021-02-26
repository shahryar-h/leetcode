/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let unSorted = [...nums];

  nums.sort(function (a, b) {
    return a - b;
  });
  let l = 0;
  let r = nums.length - 1;
  let ls = false;
  let rs = false;

  for (let i = 0; i < nums.length; i++) {
    if (rs && ls) {
      break;
    }
    if (nums[i] != unSorted[i] && !ls) {
      l = i;
      ls = true;
    }
    if (nums[r] != unSorted[r] && !rs) {
      rs = true;
    } else if (nums[r] == unSorted[r] && !rs) {
      r--;
    }
  }

  return unSorted.slice(l, r + 1).length;
};
