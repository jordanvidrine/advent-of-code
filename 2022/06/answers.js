const fs = require("fs");

const testInput = fs.readFileSync("./test-input.txt", { encoding: "utf8" });
const input = fs.readFileSync("./input.txt", { encoding: "utf8" });

function getPacketMarker(input) {
  let size = 4;
  for (let i = size; i <= input.length; i++) {
    let a, b, c, d;
    a = input.charAt(i - size);
    b = input.charAt(i - size + 1);
    c = input.charAt(i - size + 2);
    d = input.charAt(i - size + 3);
    let str = a + b + c + d;

    if (
      str.indexOf(a) === str.lastIndexOf(a) &&
      str.indexOf(b) === str.lastIndexOf(b) &&
      str.indexOf(c) === str.lastIndexOf(c) &&
      str.indexOf(d) === str.lastIndexOf(d)
    ) {
      return i;
    }
  }
}

console.log("answer1",getPacketMarker(input));

function getMessageMarker(input) {
  let size = 14;
  for (let i = size; i <= input.length; i++) {
    let a, b, c, d, e, f, g, h, I, j, k, l, m, n;
    a = input.charAt(i - size);
    b = input.charAt(i - size + 1);
    c = input.charAt(i - size + 2);
    d = input.charAt(i - size + 3);
    e = input.charAt(i - size + 4);
    f = input.charAt(i - size + 5);
    g = input.charAt(i - size + 6);
    h = input.charAt(i - size + 7);
    I = input.charAt(i - size + 8);
    j = input.charAt(i - size + 9);
    k = input.charAt(i - size + 10);
    l = input.charAt(i - size + 11);
    m = input.charAt(i - size + 12);
    n = input.charAt(i - size + 13);

    let str = a + b + c + d + e + f + g + h + I + j + k + l + m + n;

    if (
      str.indexOf(a) === str.lastIndexOf(a) &&
      str.indexOf(b) === str.lastIndexOf(b) &&
      str.indexOf(c) === str.lastIndexOf(c) &&
      str.indexOf(d) === str.lastIndexOf(d) &&
      str.indexOf(e) === str.lastIndexOf(e) &&
      str.indexOf(f) === str.lastIndexOf(f) &&
      str.indexOf(g) === str.lastIndexOf(g) &&
      str.indexOf(h) === str.lastIndexOf(h) &&
      str.indexOf(I) === str.lastIndexOf(I) &&
      str.indexOf(j) === str.lastIndexOf(j) &&
      str.indexOf(k) === str.lastIndexOf(k) &&
      str.indexOf(l) === str.lastIndexOf(l) &&
      str.indexOf(m) === str.lastIndexOf(m) &&
      str.indexOf(n) === str.lastIndexOf(n)
    ) {
      return i;
    }
  }
}

console.log("answer2",getMessageMarker(input));
