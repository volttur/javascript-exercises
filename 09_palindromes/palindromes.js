const palindromes = function (str) {
    str = str.replace(/[^a-z]/g, '').toLowerCase();
    const revStr = str
                    .split('')
                    .reverse()
                    .join('');
    return revStr === str;
};

// Do not edit below this line
module.exports = palindromes;
