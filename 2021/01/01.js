const fs = require('fs');
let input = fs.readFileSync('./input.txt', {encoding: 'utf8'}).split(/\r?\n/);

let testInput = `199
200
208
210
200
207
240
269
260
263`;

testInput = testInput.split("\n").map(item => Number(item));

input = input.map(item => Number(item));

function findDepth(measurements) {
  let depthIncreases = 0;

  measurements.forEach((depth, idx) => {
    if (depth > measurements[idx - 1]) {
      depthIncreases++;
    }
  });

  return depthIncreases;
}

console.log("Part One", findDepth(input));

function threeMeasurementFindDepth(measurements) {
  let depthIncreases = 0;
  let previousGroup = 0;
  for (let i = 0; i < measurements.length - 2; i = i + 1) {
    let currentGroup =
      measurements[i] + measurements[i + 1] + measurements[i + 2];
    if (currentGroup > previousGroup && i !== 0) {
      depthIncreases++;
    }
    previousGroup = currentGroup;
  }
  return depthIncreases;
}

console.log("Part Two", threeMeasurementFindDepth(input));
