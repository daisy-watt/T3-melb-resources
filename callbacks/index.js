function calculate(num1, num2, cb) {
  console.log('The first number is ' + num1);
  console.log('The second number is ' + num2);
  let answer = cb(num1, num2);
  console.log('The answer is ' + answer);
}

//calculate(5, 3, add);
// calculate(10, 2, subtract);
// calculate(4, 5, multiply);

calculate(7, 2, (first, second) => {
  return second ** first;
});
// here are my math functions

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}
