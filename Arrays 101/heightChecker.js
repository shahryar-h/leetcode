/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    
let count = 0
let notsortedHeights = [...heights]

heights.sort(function(a,b){
    return a-b
})
for (let i = 0; i < notsortedHeights.length; i++) {
    if(notsortedHeights[i] != heights[i]){
        count++
    }
    
}

return count

};


console.log(heightChecker([1,4,3]));