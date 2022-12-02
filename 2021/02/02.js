const fs = require("fs");
let input = fs.readFileSync("./input.txt", { encoding: "utf8" }).split(/\r?\n/);
let testInput = fs
  .readFileSync("./testInput.txt", { encoding: "utf8" })
  .split(/\r?\n/);

function positioningWithAim(instructions) {
  let position = [0, 0];
  let aim = 0;

  instructions.forEach(instruction => {
    let direction = instruction.split(" ")[0];
    let value = Number(instruction.split(" ")[1]);

    direction === "up"
      ? (aim -= value)
      : direction === "down"
      ? (aim += value)
      : ((position[0] += value), (position[1] += aim * value));
  });

  return {
    position,
    answer: position[0] * position[1]
  };
}

console.log(positioningWithAim(input));
