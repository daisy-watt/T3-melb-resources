let people = ['alice', 'bob', 'charlie'];

// in line anon function. hard to read
// people.forEach(function (person) {
//   console.log('Hello ' + person);
// });

// in line fat arrow definition, more readable
//people.forEach((person) => console.log('Hello ' + person));

function greet(name) {
  console.log('Hi there ' + name);
}

people.forEach(greet);
