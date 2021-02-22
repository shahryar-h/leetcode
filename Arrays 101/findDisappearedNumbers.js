/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    if (nums.length == 0) {
        return nums
    }
    let res = []
    let numsu = new Set();
    
    for (let i = 0; i < nums.length; i++) {
        numsu.add(nums[i])
       
    }
    for (let j = 1; j <= nums.length; j++) {
        if ( !numsu.has(j)) {
            res.push(j)
            
        }
        

    }

  



    return res
    
};

console.log(findDisappearedNumbers([1,1]));