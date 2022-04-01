function addTwoNumbers(num1, num2, ...args) {
  return num1 + num2;
}

const add = (a, b) => a + b;

let answer = addTwoNumbers(4, 5, 6, 'chicken', 42, true, NaN);
let answer2 = addThreeNumbers(1, 2, 3);
console.log(answer);
console.log('The answer to add three is ', answer2);

console.log("I'll keep going");

// const yell = function (input) {
//   console.log(input.toUpperCase() + '!!!!!');
// };

const yell = (input) => console.log(input.toUpperCase() + '!!!!');
//fat arrow does not have access to arguments keyword
const myFunction = function () {
  console.log('Hello from fat arrow');
  console.log(arguments);
};
yell('hello');
console.log(add(10, 5));

myFunction('A', 'B', 'C');

//function keyword hoisted
function addThreeNumbers(a, b, c) {
  return a + b + c;
}
// fat arrow not hoisted

// const addThreeNumbers = (a, b, c) => {
//   return a + b + c;
// };
