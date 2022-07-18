const repeatString = function(str, num) {
    let result = '';

    if (num < 0) return "ERROR";

    for (let i = 0; i < num; i++) {
        result += str;
    }

    return result;

};

/*
function repeatString(str, num) {
        for (let i = 0; i < num; i++) {
            
        } 
   }
*/ 

// Do not edit below this line
module.exports = repeatString;
