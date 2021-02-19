/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    

    nums.sort(function(a,b){return a-b})
    let count = 0
    if (nums.length > 2) {

        for (let i = nums.length-1 ; i >= 0 ; i--) {
            if (nums[i] != nums[i-1]) {

                count++
                if (count == 3) {
                    return nums[i]
                }
                
            }

        
        }
    }
    

    return nums[nums.length-1]



};




console.log(thirdMax([1,2]));