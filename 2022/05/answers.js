const fs = require("fs");

const testDirections = fs
  .readFileSync("./test-input.txt", { encoding: "utf8" })
  .split(/\r?\n/)
  .map(line => {
    let direction = /move (\d*) from (\d*) to (\d*)/g.exec(line);
    return [Number(direction[1]), Number(direction[2]), Number(direction[3])];
  });

const directions = fs
  .readFileSync("./input.txt", { encoding: "utf8" })
  .split(/\r?\n/)
  .map(line => {
    let direction = /move (\d*) from (\d*) to (\d*)/g.exec(line);
    return [Number(direction[1]), Number(direction[2]), Number(direction[3])];
  });

let testInput = {
  1: ["N", "Z"],
  2: ["D", "C", "M"],
  3: ["P"]
};

const input = {
  1: ["F", "L", "M", "W"],
  2: ["F", "M", "V", "Z", "B"],
  3: ["Q", "L", "S", "R", "V", "H"],
  4: ["J", "T", "M", "P", "Q", "V", "S", "F"],
  5: ["W", "S", "L"],
  6: ["W", "J", "R", "M", "P", "V", "F"],
  7: ["F", "R", "N", "P", "C", "Q", "J"],
  8: ["B", "R", "W", "Z", "S", "P", "H", "V"],
  9: ["W", "Z", "H", "G", "C", "J", "M", "B"]
};

function answer1(input, directions) {
  directions.forEach(direction => {
    let moveAmt = direction[0];
    let moveFrom = direction[1];
    let moveTo = direction[2];

    let items = input[moveFrom].splice(0, moveAmt).reverse();

    input[moveTo].unshift(...items);
  });

  let answer = "";

  for (let row in input) {
    answer += input[row][0];
  }

  return answer;
}

// console.log(answer1(input, directions));

function answer2(input, directions) {
  directions.forEach(direction => {
    let moveAmt = direction[0];
    let moveFrom = direction[1];
    let moveTo = direction[2];

    let items = input[moveFrom].splice(0, moveAmt);
    input[moveTo].unshift(...items);
  });

  let answer = "";

  for (let row in input) {
    answer += input[row][0];
  }

  return answer;
}

console.log(answer2(input, directions));
