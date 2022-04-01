function modifyString(callback, str) {
  return callback(str);
}
console.log(modifyString(capitalize, 'hello there'));
// util function

console.log(modifyString(yell, 'callbacks are hard'));

function yell(str) {
  return str.toUpperCase() + '!!!!';
}
function capitalize(str) {
  return str[0].toUpperCase() + str.substring(1);
}
