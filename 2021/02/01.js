const fs = require("fs");
let input = fs.readFileSync("./input.txt", { encoding: "utf8" }).split(/\r?\n/);
let testInput = fs
  .readFileSync("./testInput.txt", { encoding: "utf8" })
  .split(/\r?\n/);

function positioning(instructions) {
  let position = [0, 0];

  instructions.forEach(instruction => {
    let direction = instruction.split(" ")[0];
    let value = Number(instruction.split(" ")[1]);

    direction === "up"
      ? (position[1] -= value)
      : direction === "down"
      ? (position[1] += value)
      : (position[0] += value);
  });

  return position[0] * position[1];
}

console.log(positioning(input));
