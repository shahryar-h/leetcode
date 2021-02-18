/**
 * @param {number[]} A
 * @return {number[]}
 */


var sortArrayByParity = function(A) {
    

    for (let i = 0; i < A.length; i++) {
        if (A[i]%2 != 0) {
            let j = i+1
            while(A[j]%2 != 0 && j<A.length){
                j++
            }
            if (j<A.length) {
                temp = A[i]
                A[i] = A[j]
                A[j] = temp
            }else{
                break;
            }

        }
        
    }

return A

};


console.log(sortArrayByParity([4,3,5,2,6,0,2,3,3,4,5]));