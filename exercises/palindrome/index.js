// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   return str.split("").reverse().join("") === str;
// }

// function palindrome(str) {
//   let reversed = "";

//   for (let char of str) {
//     reversed = char + reversed;
//   }

//   return str === reversed;
// }

// function palindrome(str) {
//   return str.split("").reduce((rev, char) => char + rev, "") === str;
// }

// advanced, but does 2 X work
function palindrome(str) {
  return str.split("").every((elem, index, arr) => {
    const compSecInd = arr.length - 1 - index;

    return elem === arr[compSecInd];
  });
}

// aba
// abba
// 012

// function palindrome(str) {
//   const splitted = str.split("");

//   for (let i = 0; i <= splitted.length - 1 / 2; i++) {
//     if (splitted[i] !== splitted[splitted.length - 1 - i]) {
//       return false;
//     }
//   }

//   return true;
// }

// palindrome("abba");

module.exports = palindrome;
