/**
 * @param {number[]} nums
 * @return {number}
 */


var removeDuplicates = function(nums) {
    let len = 0;

   for (let i = 0; i < nums.length; i++) {


        if (i == 0 || nums[i] != nums[i - 1]) {
            nums[len] = nums[i]
            len++
        }
       
   }

   return len

    
    
};

