const reverseString = function(str) {
    strArr = str.split('');
    strArr.reverse();
    str = strArr.join();
    str = str.replace(/,/g, '');
    return str;
};

// Do not edit below this line
module.exports = reverseString;
