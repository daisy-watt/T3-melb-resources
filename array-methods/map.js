let numbers = [1, 2, 3, 4, 5];

//in line anon function with function keyword. hard to read
// let doubledNumbers = numbers.map(function (number) {
//   return number * 2;
// });

//fat arrow syntax. nicer to read
//let doubledNumbers = numbers.map((n) => n * 2);

//defined function passed as reference
function double(num) {
  return num + num;
}

let doubledNumbers = numbers.map(double);
console.log(doubledNumbers);

console.log(`Ten doubled is ${double(10)}`);
