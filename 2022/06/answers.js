const fs = require("fs");

const testInput = fs.readFileSync("./test-input.txt", { encoding: "utf8" });
const input = fs.readFileSync("./input.txt", { encoding: "utf8" });

function isUnique(array) {
  return new Set(array).size === array.length;
}

function getMarker(input,size) {
  for (let i = size; i <= input.length; i++) {
    let window = [];

    for (let index = 0; index < size; index++) {
      window.push(input[i - size + index])
    }

    if (isUnique(window)) {
      return i;
    }
  }
}

console.log("answer1",getMarker(input,4));

console.log("answer2",getMarker(input,14));
