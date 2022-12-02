const fs = require("fs");
let input = fs.readFileSync("./input.txt", { encoding: "utf8" }).split(/\r?\n/);

let testInput = fs
  .readFileSync("./testInput.txt", { encoding: "utf8" })
  .split(/\r?\n/)
  .filter(Boolean);

let bingoNumbers = testInput.shift();

function createCards(input) {
  let cards = {};

  for (let card = 0; card < input.length / 5; card++) {
    let cardNumbers = { Y: {}, X: {} };
    // build horizontal card rows
    for (let row = 0; row < 5; row++) {
      let cardRow = new Map();
      let numbers = input[row]
        .split(/(\d+)/)
        .filter(item => Boolean(item) && item !== " " && item !== "  ");

      numbers.forEach(number => {
        cardRow.set(number, 0);
      });
      cardNumbers["Y"][row] = cardRow;
    }
    // build vertical card rows
    for (let column = 0; column < input.length / 3; column++) {
      let cardColumn = new Map();
      for (let y = 0; y < 5; y++) {
        let number = input[y]
          .split(/(\d+)/)
          .filter(item => Boolean(item) && item !== " " && item !== "  ")[column];
        cardColumn.set(number, 0);
      }
      cardNumbers["X"][column] = cardColumn;
    }

    cards[card] = cardNumbers;
  }

  return cards;
}

let cards = createCards(testInput);

// console.log(cards);

for (let idx = 0; idx < bingoNumbers.length; idx++) {
  let bingoNumber = bingoNumbers[idx];

  for (let cardNumber in cards) {
    let card = cards[cardNumber];
    for (let rowType in card) {
      console.log(cardNumber,rowType, card[rowType]);
      let cardRows = card[rowType]
      let (row in cardRows) {
        console.log(cardRows[row]);
      }
      // if (card[row].has(`${bingoNumber}`)) {
      //   card[row].set(`${bingoNumber}`, 1)
      // }
    }
  }
}
