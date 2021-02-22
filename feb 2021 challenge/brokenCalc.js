/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
var brokenCalc = function(X, Y) {
    
    
    
    let res = 0
    
    while(Y>X){
        
        if(Y%2==0){
            
            Y= Y/2
            
        }else{
            
            Y=Y+1
        }
        res++
        
        
    }
    
    return res + X-Y
}; 