const fs = require("fs");
let input = fs.readFileSync("./input.txt", { encoding: "utf8" }).split(/\r?\n/);

let testInput = fs
  .readFileSync("./testInput.txt", { encoding: "utf8" })
  .split(/\r?\n/);

// oxygen g rating = keep numbers with most common bit in current position
// if equal, keep numbers with a 1 in the position considered

// co2 rating = keep numbers with least common but in the current position
// if equal, keep numbers with a 0 in position considered

function oRating(input) {
  let mostCommonBit = { 0: 0, 1: 0 };
  let filteredNumbers = input;

  for (let x = 0; x < input[0].length; x++) {
    for (let y = 0; y < filteredNumbers.length; y++) {
      mostCommonBit[filteredNumbers[y][x]]++;
    }

    filteredNumbers = filteredNumbers.filter(number => {
      if (mostCommonBit["0"] > mostCommonBit["1"]) {
        return number.charAt(x) === "0";
      } else if (mostCommonBit["0"] === mostCommonBit["1"]) {
        return number.charAt(x) === "1";
      } else {
        return number.charAt(x) === "1";
      }
    });

    if (filteredNumbers.length === 1) {
      return parseInt(filteredNumbers[0],2);
    }

    mostCommonBit = { 0: 0, 1: 0 };
  }
}

function cO2Rating(input) {
  let mostCommonBit = { 0: 0, 1: 0 };
  let filteredNumbers = input;

  for (let x = 0; x < input[0].length; x++) {
    for (let y = 0; y < filteredNumbers.length; y++) {
      mostCommonBit[filteredNumbers[y][x]]++;
    }

    filteredNumbers = filteredNumbers.filter(number => {
      if (mostCommonBit["1"] > mostCommonBit["0"]) {
        return number.charAt(x) === "0";
      } else if (mostCommonBit["1"] === mostCommonBit["0"]) {
        return number.charAt(x) === "0";
      } else {
        return number.charAt(x) === "1";
      }
    });

    if (filteredNumbers.length === 1) {
      return parseInt(filteredNumbers[0],2);
    }

    mostCommonBit = { 0: 0, 1: 0 };
  }
}

console.log(oRating(input) * cO2Rating(input));
