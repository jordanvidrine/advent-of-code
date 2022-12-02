const fs = require("fs");
let input = fs.readFileSync("./input.txt", { encoding: "utf8" }).split(/\r?\n/);

let testInput = fs
  .readFileSync("./testInput.txt", { encoding: "utf8" })
  .split(/\r?\n/)

let yMax = 0;
let xMax = 0;

let yMin = 0;
let xMin = 0;

// first figure out how big this map will be
// by computing the lowest X,Y and the highest X,Y

testInput.forEach(rule => {
  rule.split("->").forEach(coords => {
    let x = parseInt(coords.trim().split(",")[0])
    let y = parseInt(coords.trim().split(",")[1])

    yMax = y > yMax ? y : yMax;
    yMin = y < yMin ? y : yMin;

    xMax = x > xMax ? x : xMax;
    xMin = x < xMin ? x : xMin;
  });
})

let row = Array(xMax).fill(0)
let grid = Array(yMax).fill(row)

let lines = testInput.filter(rule => {
  let start = rule.split("->")[0].trim().split(",");
  let end = rule.split("->")[1].trim().split(",");
  let x1 = parseInt(start[0])
  let y1 = parseInt(start[1])
  let x2 = parseInt(end[0])
  let y2 = parseInt(end[1])
  return (x1 === x2 || y1 === y2)
})

function markGrid(input) {
  input.forEach(rule => {
    let x1 = parseInt(rule.split("->")[0].split(",")[0].trim());
    let y1 = parseInt(rule.split("->")[0].split(",")[1].trim());
    let x2 = parseInt(rule.split("->")[1].split(",")[0].trim());
    let y2 = parseInt(rule.split("->")[1].split(",")[1].trim());

    console.log(x1,y1,x2,y2);
    
    if (x1 === x2) { // horizontal lines
      if (y1 > y2) {
        for (let index = y1; index >= y2; index--) {
          grid[x1][index-1] = ;
        }
      } else {
        for (let index = y1; y2 >= index; index++) {
          grid[x1][index-1]++;
        }
      }
    } else { // vertical line
      if (x1 > x2) {
        for (let index = x1; index >= x2; index--) {
          grid[index][y1-1]++;
        }
      } else {
        for (let index = x1; x2 >= index; index++) {
          grid[index][y1-1]++;
        }
      }
    }

    console.log(grid);
  })
}

markGrid(testInput)
