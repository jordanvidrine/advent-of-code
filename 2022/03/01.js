const fs = require("fs");

let testInput = fs
  .readFileSync("./test-input.txt", { encoding: "utf8" })
  .split(/\r?\n/);

const input = fs
  .readFileSync("./input.txt", { encoding: "utf8" })
  .split(/\r?\n/);

function getPriority(char) {
  let code;
  if (char === char.toUpperCase()) {
    code = "A".charCodeAt(0);
    return char.charCodeAt(0) - code + 27;
  } else {
    code = "a".charCodeAt(0);
    return char.charCodeAt(0) - code + 1;
  }
}

let halves = input.map(rucksack => {
  return [
    rucksack.slice(0, rucksack.length / 2),
    rucksack.slice(rucksack.length / 2)
  ];
});

let answer1 = halves.reduce((previousValue, currentValue) => {
  let compartment1 = currentValue[0];
  let compartment2 = currentValue[1];

  for (let i = 0; i < compartment1.length; i++) {
    let currentLetter = compartment1.charAt(i);
    if (compartment2.includes(currentLetter)) {
      return previousValue + getPriority(currentLetter);
    }
  }
}, 0);

console.log(answer1);

let groupsArr = [];

for (let i = 0; i < input.length; i += 3) {
  groupsArr.push(input.slice(i, i + 3));
}

let answer2 = groupsArr.reduce((previousValue, currentValue) => {
  let compartment1 = currentValue[0];
  let compartment2 = currentValue[1];
  let compartment3 = currentValue[2];

  for (let i = 0; i < compartment1.length; i++) {
    let currentLetter = compartment1.charAt(i);
    if (
      compartment2.includes(currentLetter) &&
      compartment3.includes(currentLetter)
    ) {
      return previousValue + getPriority(currentLetter);
    }
  }
}, 0);

console.log(answer2);