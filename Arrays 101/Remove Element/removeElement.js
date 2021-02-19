/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    //      let len = nums.length
    
    //     for (let i = 0; i < len; i++) {
    //         if(nums[i] == val ){
    
    //             for (let k = i+1; k < len ; k++) {
    //                 nums[k-1] = nums[k]
                    
                    
    //             }
    //             len--
    
    //         if (nums[i] == val) {
    //             i--
    //         }
            
    //     }
        
    //     return len;
            let counter = 0;
        
            for (let i = 0; i < nums.length; i++) {
                
                if (nums[i] !== val) {
                    nums[counter] = nums[o]
                    counter++
                    
                }
                
            }
            return counter;
        
            
    
    
    };