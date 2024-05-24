// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// option 1
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// option 2 abcd
// function reverse(str) {
//   let reversed = "";

//   for (let char of str) {
//     reversed = char + reversed;
//   }

//   return reversed;
// }

// option 3
function reverse(str) {
  return str.split("").reduce((reversed, char) => char + reversed, "");
}


module.exports = reverse;
