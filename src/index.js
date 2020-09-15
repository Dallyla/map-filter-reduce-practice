//Map -Create a new array by doing something with each item in an array.

// const newNumbers = numbers.map(function (x){
//   return x*2;
// });

// console.log(newNumbers);

// var newNumbers = [];

// numbers.forEach(function (x) {
//   newNumbers.push(x*2);
// });

// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

// const newNumbers = numbers.filter(function (num) {
//   return num > 10;
// });

//Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber = numbers.reduce(function (accumulator, currentNumber){
//   console.log("accumulator = " + accumulator);
//   console.log("currentNumber = " + currentNumber);
//   return accumulator + currentNumber;
// })

// var numbers = [3, 56, 2, 48, 5];

// //Find - find the first item that matches from an array.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })

// console.log (newNumber);

//FindIndex - find the index of the first item that matches.

import emojipedia from "./emojipedia";

const descriptions = emojipedia.map(function (emojiItem) {
  return emojiItem.meaning.substring(0, 100);
});

console.log(descriptions);
