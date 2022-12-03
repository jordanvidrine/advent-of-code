const fs = require("fs");

let input = fs
  .readFileSync("./input.txt", { encoding: "utf8" })
  .split(/\r?\n/)
  .map(item => item.replace(" ", ""));

let testInput = fs
  .readFileSync("./test-input.txt", { encoding: "utf8" })
  .split(/\r?\n/)
  .map(item => item.replace(" ", ""));


// rock < paper < scissor
// a < b < c
// 1 < 2 < 3
// x < y < z

const moves = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

const mapInput = {
  A: moves.rock,
  B: moves.paper,
  C: moves.scissors,
  X: "LOSE", // LOSE
  Y: "DRAW", // DRAW
  Z: "WIN", // WIN
};

function score(oppMove, myMove) {
  if (
    (oppMove === moves.rock && myMove === moves.paper) ||
    (oppMove === moves.paper && myMove === moves.scissors) ||
    (oppMove === moves.scissors && myMove === moves.rock)
  ) {
    return myMove + 6;
  }
  else if (myMove === oppMove) {
    return myMove + 3;
  } else {
    return myMove
  }
}

function partOne(input) {
  let answer = input.map((moves) => {
    let oppMove = mapInput[moves[0]];
    let myMove = mapInput[moves[1]];
    return score(oppMove, myMove);
  });
  console.log(answer.reduce((a,b) => a + b, 0))
}

partOne(input)

function score2(oppMove, outcome) {
  if (outcome === "LOSE") {
    if (oppMove === moves.rock) {
      return moves.scissors;
    }
    if (oppMove === moves.paper) {
      return moves.rock;
    }
    return moves.paper;
  }

  if (outcome === "DRAW") {
    return oppMove + 3;
  }

  if (outcome === "WIN") {
    if (oppMove === moves.rock) {
      return moves.paper + 6;
    }
    if (oppMove === moves.paper) {
      return moves.scissors + 6;
    }
    return moves.rock + 6;
  }
}

function partTwo() {
  let answer = input.map((moves) => {
    let oppMove = mapInput[moves[0]];
    let outCome = mapInput[moves[1]];
    return score2(oppMove, outCome);
  });
  console.log(answer.reduce((a,b) => a + b, 0))
}

partTwo();
