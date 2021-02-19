/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    
    let open = 0
    const usingSpread = [...s]
    for (let i = 0; i < usingSpread.length; i++) {
        
        if(usingSpread[i] == "("){
            open++
        }else if (usingSpread[i] == ")") {
            if (open == 0) {
                usingSpread[i] = "#"
            }else{
                open--
            }
        }
    }

    for (let j = usingSpread.length-1 ; j >=0  && open > 0 ; j-- ){
        if ( usingSpread[j] == "(" ) {
            usingSpread[j] = "#"
            open--
        }
        
    }

    let result = usingSpread.filter(char => char != "#");

    


    return result.join('')
    
};



console.log(minRemoveToMakeValid("hellojksahdk(la)da(s"));