const add = function(x, y) {
  let res = Number(x + y);
	return res;
};

const subtract = function(x, y) {
	let res = Number(x - y);
	return res;
};

//const sum = function(x, y, ...z) {
//	let res = 0;
//  for (num of arguments) {
//    res += num;
//  };
//  return Number(res);
//};

//const multiply = function(x, y, ...z) {
//	let res = 1;
//  for (num of arguments) {
//    res = res * num;
//  };
//  return Number(res);
//};

const sum = function(arr) {  //take into account that the test is calling 
                             //1 argument, an array, there is no given
                             //multiple arguments as tougth at the beginning
  
  let res = 0;
  for (let i = 0; i < arr.length; i++) { //originally was used 'while'
    res += arr[i];
  };
  return res;
};

const multiply = function(arr) {  //look the previous comment above
  let res = 1;
  for (let i = 0; i < arr.length; i++) {
    res *= arr[i];
  };
  return res;
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
    let res = num;
    for (let i = 1; i < num; i++) {
      res *= i;
    };
  return res;
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
