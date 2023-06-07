const convertToCelsius = function(tempF) {
  let tempC = (tempF - 32) * 5/9;
  let res = tempC.toFixed(1);
  return Number(res);    
};

const convertToFahrenheit = function(tempC) {
  let tempF = tempC * 9/5 + 32;
  let res = tempF.toFixed(1);
  return Number(res);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
