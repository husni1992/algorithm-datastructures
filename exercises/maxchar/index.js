// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const hashmap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    hashmap[char] = hashmap[char] + 1 || 1;
  }

  for (let char in hashmap) {
    if (hashmap[char] > max) {
      max = hashmap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
