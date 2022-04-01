let names = ['alice', 'andrew', 'charlie', 'bob', 'abigail', 'david', 'steph'];

// anon function in line definition. hard to read
// let filteredNames = names.filter(function (name) {
//   //  if (name[0] ==='a') {
//   //    return true
//   //  } else {
//   //    return false
//   //  }
//   return name[0] === 'a';
// });

// fat arrow syntax is easier to read

//let filteredNames = names.filter((name) => name[0] === 'a');
function startsWithA(str) {
  return str[0] === 'a';
}

let filteredNames = names.filter(startsWithA);
console.log(filteredNames);
