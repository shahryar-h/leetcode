/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            let j = i+1;
            while(nums[j] == 0 && j < nums.length){
                j++
            }
            if(j<nums.length){
                let temp = nums[j]
                nums[j] = nums[i]
                nums[i] = temp
            }else{
                return nums
            }
            
            
        }
        
    }

    return nums



};

console.log(moveZeroes([1,2,0,3,0,0,5,60,0]))