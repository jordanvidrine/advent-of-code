const fs = require("fs");
let input = fs.readFileSync("./input.txt", { encoding: "utf8" }).split(/\r?\n/);

let testInput = fs
  .readFileSync("./testInput.txt", { encoding: "utf8" })
  .split(/\r?\n/)

function getPowerConsumption(input) {
  let mostCommonBits = {
    0: { 0: 0, 1: 0 },
    1: { 0: 0, 1: 0 },
    2: { 0: 0, 1: 0 },
    3: { 0: 0, 1: 0 },
    4: { 0: 0, 1: 0 },
    5: { 0: 0, 1: 0 },
    6: { 0: 0, 1: 0 },
    7: { 0: 0, 1: 0 },
    8: { 0: 0, 1: 0 },
    9: { 0: 0, 1: 0 },
    10: { 0: 0, 1: 0 },
    11: { 0: 0, 1: 0 },
  };

  for (let x = 0; x <= 11; x++) {
    for (let y = 0; y < input.length; y++) {
      mostCommonBits[x][input[y].charAt(x)]++; 
    }
  }

  return mostCommonBits;
}

function getGamma(consumption) {
  let gamma = "";
  for (let key in consumption) {
    if (consumption[key]["0"] > consumption[key]["1"]) {
      gamma += "0"
    } else {
      gamma += "1"
    }
  }
  return parseInt(gamma,2);
}

function getEpsilon(consumption) {
  let epsilon = "";
  for (let key in consumption) {
    if (consumption[key]["0"] > consumption[key]["1"]) {
      epsilon += "1"
    } else {
      epsilon += "0"
    }
  }
  return parseInt(epsilon,2);
}

function getAnswer(input) {
  let consumption = getPowerConsumption(input);
  let gamma = getGamma(consumption);
  let epsilon = getEpsilon(consumption);

  return gamma * epsilon;
}

console.log(getAnswer(input));