const add = function(a, b) {
  return a + b;
  	
};

const subtract = function(a, b) {
  return a - b; 
	
};

const sum = function(car) {
  return car.reduce((total, current) => total + current, 0);
};

const multiply = function(car) {
  return car.reduce((a, b) => a * b);
  
};

const power = function(a, b) {
  return a ** b;
	
};

const factorial = function(a) {
  let c = 1;
  if( a == []) {
    return 1
  }
  else {  
  for(let i = a / a; i <= a; i++) {
    c = c * i;
  }
  return c;
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
