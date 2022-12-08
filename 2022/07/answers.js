const fs = require("fs");

const input = fs
  .readFileSync("./input.txt", { encoding: "utf8" })
  .split(/\r?\n/);

function makeSystem(input) {
  let fileSystem = {
    size: 0,
    name: "root",
    type: "directory",
    children: []
  };
  let currentDirectory = fileSystem;
  let isListing = false;

  input.shift(); // remove first item

  input.forEach(instruction => {
    let instructions = instruction.split(" ");
    if (instructions[0] === "$") {
      if (instructions[1] === "ls") {
        // ls
        isListing = true;
      } else if (!instructions.includes("..")) {
        //cd a
        currentDirectory = currentDirectory.children.find(child => {
          return child.name === instructions[2];
        });
        isListing = false;
      } else {
        // cd ..
        currentDirectory = currentDirectory.parent;
        isListing = false;
      }
    } else if (instruction.includes("dir") && isListing) {
      // dir a
      let directoryName = instruction.split(" ")[1];
      currentDirectory.children.push({
        parent: currentDirectory,
        type: "directory",
        size: 0,
        name: `${directoryName}`,
        children: []
      });
    } else if (isListing) {
      // anything else
      let fileName = instruction.split(" ")[1];
      let fileSize = Number(instruction.split(" ")[0]);
      currentDirectory.children.push({
        type: "file",
        size: fileSize,
        name: `${fileName}`
      });
    }
  });
  return fileSystem;
}

function getSize(item, directoryCallback) {
  if (item.type === "file") {
    return item.size;
  }
  const directorySize = item.children
    .map(child => getSize(child, directoryCallback))
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

  directoryCallback(item.name, directorySize);

  return directorySize;
}

function answer1(maxSize) {
  const fileSystem = makeSystem(input);
  let tree = [];

  getSize(fileSystem, (name, size) => {
    tree.push({ name, size });
  });

  let answer = tree
    .filter(dir => {
      return dir.size <= maxSize;
    })
    .reduce((a, b) => {
      return a + b.size;
    }, 0);

  console.log(answer);
}

function answer2(spaceNeeded, totalSpace) {
  const fileSystem = makeSystem(input);
  let tree = [];

  getSize(fileSystem, (name, size) => {
    tree.push({ name, size });
  });

  sizeToDelete =
    spaceNeeded -
    (totalSpace -
      tree.find(item => {
        return item.name === "root";
      }).size);

  let dirToDelete = tree
    .filter(item => item.size >= sizeToDelete)
    .reduce((a, b) => {
      return a.size > b.size ? b : a;
    });

  console.log(dirToDelete);
}

answer1(100000);

answer2(30000000, 70000000);