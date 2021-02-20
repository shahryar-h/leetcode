/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    

    let left = 0
    let right = 0
    // right = nums.reduce((sum, num) => sum+num)
// return right
    for(let i = 0 ; i < nums.length ; i++){
        
        if(i==0){
            
            right = nums.reduce((sum, num) => sum+num)- nums[i]
        }else{
            left = left + nums[i-1]
            right = right - nums[i]
        }
        
        if (right == left) return i
    }
    
    return -1
    
};



console.log(pivotIndex([1,7,3,6,5,6]));