const sumAll = function(firstNum, lastNum) {
    if (firstNum < 0 || lastNum < 0) return "ERROR";
    if (typeof(firstNum) !== "number" || typeof(lastNum) !== "number") return "ERROR";
    let sum = 0;
    let beginNum = firstNum < lastNum ? firstNum : lastNum;
    let endNum = firstNum > lastNum ? firstNum : lastNum;

    for (let i = beginNum; i <= endNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
