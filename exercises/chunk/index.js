// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// My version, :), find how many times we have to loop, then just pick chunks of size
// function chunk(array, size) {
//   const arrayLength = array.length;
//   const chunks = [];

//   for (let i = 1; i <= Math.ceil(arrayLength / size); i++) {
//     chunks.push(array.splice(0, size));
//   }

//   return chunks;
// }

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2
// function chunk(array, size) {
//   const chunked = [];

//   for (let currentItem of array) {
//     const lastElementOfChunk = chunked[chunked.length - 1];

//     if (!lastElementOfChunk || (lastElementOfChunk && lastElementOfChunk.length === size)) {
//       chunked.push([currentItem]);
//     } else {
//       lastElementOfChunk.push(currentItem);
//     }
//   }

//   return chunked;
// }

// Simplest
function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

module.exports = chunk;
