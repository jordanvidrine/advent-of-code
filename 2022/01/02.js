const fs = require('fs');
let input = fs.readFileSync('./input.txt', {encoding: 'utf8'});
let testInput = fs.readFileSync('./test-input.txt', {encoding: 'utf8'});

input = input.split("\n").map(item => Number(item));
testInput = testInput.split("\n").map(item => Number(item));

let calories = [];
let elves = 0;

for (let i = 0; i < input.length ; i++) {
  if (input[i] > 0) {
    calories[elves] ? calories[elves] = input[i] + calories[elves] :
    calories[elves] = input[i];
  } else {
    elves++;
  }
}

let sortedCalories = [...calories].sort((a,b) => {
  return a > b ? -1 : 1;
})

console.log(sortedCalories[0] + sortedCalories[1] + sortedCalories[2])