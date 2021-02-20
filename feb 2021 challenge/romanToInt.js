/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    res = 0
    arr = s.split('')
    var letters = {
        "I" : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
            }

    for (let i = arr.length-1 ; i >= 0 ; i--) {
        if (arr[i] == "V" | arr[i] == "X" && arr[i-1] == "I" ) {
            
            res = res + letters[arr[i]] - letters[arr[i-1]]
            i--
            
        }else if (arr[i] == "L" | arr[i] == "C" && arr[i-1] == "X" ) {
            
            res = res + letters[arr[i]] - letters[arr[i-1]]
            i--
            
        }else if (arr[i] == "D" | arr[i] == "M" && arr[i-1] == "C" ) {
            
            res = res + letters[arr[i]] - letters[arr[i-1]]
            i--
            
        }else{

            res = res + letters[arr[i]]
        }
        
        
    }

    

return res



};

console.log(romanToInt("MCMXCIV"));