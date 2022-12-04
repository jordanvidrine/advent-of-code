const fs = require("fs");

let answer1 = fs
  .readFileSync("./input.txt", { encoding: "utf8" })
  .split(/\r?\n/)
  .reduce((previousValue, item) => {
    let assignments = item.split(",");
    let elf1 = /(^\d*)-(\d*$)/g.exec(assignments[0]);
    let elf2 = /(^\d*)-(\d*$)/g.exec(assignments[1]);
    let a, b, c, d;

    a = Number(elf1[1]);
    b = Number(elf1[2]);
    c = Number(elf2[1]);
    d = Number(elf2[2]);

    if ((a >= c && b <= d) || (c >= a && d <= b)) {
      return previousValue + 1;
    }
    return previousValue;
  }, 0);

console.log("one",answer1);

let answer2 = fs
  .readFileSync("./input.txt", { encoding: "utf8" })
  .split(/\r?\n/)
  .reduce((previousValue, item) => {
    let assignments = item.split(",");
    let elf1 = /(^\d*)-(\d*$)/g.exec(assignments[0]);
    let elf2 = /(^\d*)-(\d*$)/g.exec(assignments[1]);
    let a, b, c, d;

    a = Number(elf1[1]);
    b = Number(elf1[2]);
    c = Number(elf2[1]);
    d = Number(elf2[2]);

    if (
      (b >= c && b <= d) ||
      (a >= c && a <= d) ||
      (a >= c && b <= d) ||
      (c >= a && d <= b)
    ) {
      return previousValue + 1;
    }
    return previousValue;
  }, 0);

console.log("two",answer2);
