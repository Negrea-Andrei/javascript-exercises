const convertToCelsius = function(farenheit) {
  let calculate = ((farenheit - 32) * 5) / 9;
  return parseFloat(calculate.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  let calculate2 = celsius * 1.8 + 32;
  return parseFloat(calculate2.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
