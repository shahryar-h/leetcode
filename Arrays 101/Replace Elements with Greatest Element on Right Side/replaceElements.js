/**
 * @param {number[]} arr
 * @return {number[]}
 */

// this funcrion is just to test the output
function arraysEqual(a1,a2) {
    /* WARNING: arrays must not contain {objects} or behavior may be undefined */
    return JSON.stringify(a1)==JSON.stringify(a2);
}


var replaceElements = function(arr) {
    if (arr.length < 2) {
        return [-1]
    }
    
    for (let i = 0; i < arr.length-1; i++) {
        max = arr[i+1]
        for (let j = i+2; j < arr.length; j++) {
            if (arr[j] > max) {
                max = arr[j]
            }
        }
        arr[i] = max
    }
    arr[arr.length-1] = -1
    return arr
};



res = replaceElements([17,18,5,4,6,1])
console.log(arraysEqual(res,[18,6,6,6,1,-1]));