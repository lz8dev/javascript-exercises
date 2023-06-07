const add = function(x, y) {
  let res = Number(x + y);
	return res;
};

const subtract = function(x, y) {
	let res = Number(x - y);
	return res;
};

const sum = function(x, y, ...z) {
	let res = 0;
  for (num of arguments) {
    res += num;
  };
  return Number(res);
};

const multiply = function(x, y, ...z) {
	let res = 1;
  for (num of arguments) {
    res = res * num;
  };
  return Number(res);
};

const power = function(x, y) {
  if (y === 0) {
    res = 1;
    return res;s
  } else{
    let res = x;
    for (let i = 1; i < y; i++) {
      res = x * res;
    };
    return res;
  };
};

const factorial = function(num) {
	if (num < 0) {
    return undefined;
  } else if (num === 0) {
      return 1;
  } else {
    for (let i = 0; i < num; i++) {
      num *= i;
    };
  return num;
  };
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
