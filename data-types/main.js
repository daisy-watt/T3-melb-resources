let name = 'Alex';
let myAge = 34;
let myBankBalance = 1.34;
console.log(typeof name);
console.log(typeof myAge);
console.log(typeof myBankBalance);

let names = ['Iryna', 'Nora', 'Daisy'];

console.log(typeof names);

let alexObject = {
  name: 'alex',
  age: 34,
  location: 'Melbourne',
};

console.log(typeof alexObject);

console.log(alexObject['name']);
console.log(alexObject.age);
alexObject.location = 'sydney';
console.log(alexObject.location);

if (false) {
  console.log('hello');
}
