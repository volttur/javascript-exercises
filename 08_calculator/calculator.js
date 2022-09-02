const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, num) => {
    return total + num;
  }, 0);
};

const multiply = function(arr) {
  return arr.length ? arr.reduce((total, num) => {
    return total * num;
  }) : 0;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  if (a === 0) return 1;
  const arr = [];
	for (let i = 1; i <= a; i++) {
    arr.push(i);
  }
  return arr.reduce((total, num) => {
    return total * num;
  });
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
