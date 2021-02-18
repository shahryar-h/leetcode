/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    


if (A.length < 3) {
    return 0
}

let diff = 0
let counter = 0

for (let i = 0; i < A.length - 2; i++) {
    diff = A[i] - A[i+1]
    if( diff == A[i+1] - A[i+2] ){
        counter++
        let j = i+3
        while(j < A.length && A[j-1] - A[j] == diff){
            counter++
            j++
        }
    }

}

return counter

};






console.log(numberOfArithmeticSlices([1, 2, 3, 4]));