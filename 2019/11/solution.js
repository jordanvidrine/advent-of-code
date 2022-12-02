const fs = require('fs')

const getInput = () => {
  let input = fs.readFileSync('./input.txt')
  return input.toString().split(',').map(numberStr => Number(numberStr))
}

function painterRobot() {
  let instructions = getInput();

  let index = 0;
  let rBase = 0;

  let map = {};
  let x = 0;
  let y = 0;

  let curentDirection = 'UP'

  let map[`${x},${y}`] = 0

  let output = []

  for ( let i = 0; instructions[i] !== 99; i = getInstructionPointer(instructions[i], i, instructions, rBase)) {

    // define current instruction number
    let currentInstruction = instructions[i]

    // prepend instruction if not length of 5, prepend 0s
    if (currentInstruction.toString().length <= 5) {
      currentInstruction = prepender(currentInstruction)
    }

    // convert to object with param data
    currentInstruction = getOpCodeAndParams(currentInstruction);

    if (currentInstruction.opCode === '03') {
      let storage = currentInstruction.paramMode1 === '0' ? instructions[i+1] // position mode
      : instructions[i+1] + rBase // relative mode

      instructions[storage] = map[`${x},${y}`] === 0 ? 0 : 1
    }

    if (currentInstruction.opCode === '01') {
      let input1 = currentInstruction.paramMode1 === '1' ? instructions[i+1] // immediate mode, literal
      : currentInstruction.paramMode1 === '2' ? instructions[instructions[i+1] + rBase] // relative mode
      : instructions[instructions[i+1]] // position mode

      let input2 = currentInstruction.paramMode2 === '1' ? instructions[i+2]
      : currentInstruction.paramMode2 === '2' ? instructions[instructions[i+2] + rBase]
      : instructions[instructions[i+2]]

      let storage = currentInstruction.paramMode3 === '0' ? instructions[i+3] // position mode
      : instructions[i+3] + rBase // relative mode

      instructions[storage] = input1 + input2
    }

    if (currentInstruction.opCode === '02') {
      let input1 = currentInstruction.paramMode1 === '1' ? instructions[i+1] // immediate mode, literal
      : currentInstruction.paramMode1 === '2' ? instructions[instructions[i+1] + rBase] // relative mode
      : instructions[instructions[i+1]] // position mode

      let input2 = currentInstruction.paramMode2 === '1' ? instructions[i+2]
      : currentInstruction.paramMode2 === '2' ? instructions[instructions[i+2] + rBase]
      : instructions[instructions[i+2]]

      let storage = currentInstruction.paramMode3 === '0' ? instructions[i+3] // position mode
      : instructions[i+3] + rBase // relative mode

      instructions[storage] = input1 * input2
    }

    if (currentInstruction.opCode === '04') {
      let input1 = currentInstruction.paramMode1 === '1' ? instructions[i+1] // immediate mode, literal
      : currentInstruction.paramMode1 === '2' ? instructions[instructions[i+1] + rBase] // relative mode
      : instructions[instructions[i+1]] // position mode

      output.push(input1)

      if (output.length === 2) {
        let colorToPaint = output[0]
        let directionToTurn = output[1]
        output = []

        map[`${x},${y}`] = colorToPaint

        // use current direction and directionToTurn to determine what teh new values for x and y should be

        // if the current direcion is up and the direction to turn is 0
          // face left
          // x -= 1
          // y remains the same

        // if the current is up and the direction to turn is 1
          // face right
          // x += 1
          // y remains the same







      }
    }

  }


}

function getNewCoords(currentCoords, currentDirection, directionToTurn) {
// returns next X and Y coords = {x: y:} and newDirection = 'UP', 'RIGHT', 'LEFT', or 'DOWN'

  if (currentDirection === 'UP') {
    // if the current direcion is UP and the direction to turn is 0
      // face LEFT
      // x -= 1
      // y remains the same

    // if the current is UP and the direction to turn is 1
      // face RIGHT
      // x += 1
      // y remains the same
  }

}

function intCodeComp(memory, input) {
    var instructions = computerInput

    let rBase = 0;
    let output = []

    for ( let i = 0; instructions[i] !== 99; i = getInstructionPointer(instructions[i], i, instructions, rBase)) {

    // define current instruction number
    let currentInstruction = instructions[i]

    // prepend instruction if not length of 5, prepend 0s
    if (currentInstruction.toString().length <= 5) {
      currentInstruction = prepender(currentInstruction)
    }

    // convert to object with param data
    currentInstruction = getOpCodeAndParams(currentInstruction);

    if (currentInstruction.opCode === '03') {
      let storage = currentInstruction.paramMode1 === '0' ? instructions[i+1] // position mode
      : instructions[i+1] + rBase // relative mode

      instructions[storage] = output[output.length-1]
      console.log(`Storing last output as input ${output[output.length-1]}`)
    }

    if (currentInstruction.opCode === '01') {
      let input1 = currentInstruction.paramMode1 === '1' ? instructions[i+1] // immediate mode, literal
      : currentInstruction.paramMode1 === '2' ? instructions[instructions[i+1] + rBase] // relative mode
      : instructions[instructions[i+1]] // position mode

      let input2 = currentInstruction.paramMode2 === '1' ? instructions[i+2]
      : currentInstruction.paramMode2 === '2' ? instructions[instructions[i+2] + rBase]
      : instructions[instructions[i+2]]

      let storage = currentInstruction.paramMode3 === '0' ? instructions[i+3] // position mode
      : instructions[i+3] + rBase // relative mode

      instructions[storage] = input1 + input2
    }

    if (currentInstruction.opCode === '02') {
      let input1 = currentInstruction.paramMode1 === '1' ? instructions[i+1] // immediate mode, literal
      : currentInstruction.paramMode1 === '2' ? instructions[instructions[i+1] + rBase] // relative mode
      : instructions[instructions[i+1]] // position mode

      let input2 = currentInstruction.paramMode2 === '1' ? instructions[i+2]
      : currentInstruction.paramMode2 === '2' ? instructions[instructions[i+2] + rBase]
      : instructions[instructions[i+2]]

      let storage = currentInstruction.paramMode3 === '0' ? instructions[i+3] // position mode
      : instructions[i+3] + rBase // relative mode

      instructions[storage] = input1 * input2
    }

    if (currentInstruction.opCode === '04') {
      let input1 = currentInstruction.paramMode1 === '1' ? instructions[i+1] // immediate mode, literal
      : currentInstruction.paramMode1 === '2' ? instructions[instructions[i+1] + rBase] // relative mode
      : instructions[instructions[i+1]] // position mode

      output.push(input1)
      console.log(`Storing ${input1} Outputting ${output[output.length-1]}`)
    }

    if (currentInstruction.opCode === '07') {
      let input1 = currentInstruction.paramMode1 === '1' ? instructions[i+1] // immediate mode, literal
      : currentInstruction.paramMode1 === '2' ? instructions[instructions[i+1] + rBase] // relative mode
      : instructions[instructions[i+1]] // position mode

      let input2 = currentInstruction.paramMode2 === '1' ? instructions[i+2]
      : currentInstruction.paramMode2 === '2' ? instructions[instructions[i+2] + rBase]
      : instructions[instructions[i+2]]

      let storage = currentInstruction.paramMode3 === '0' ? instructions[i+3] // position mode
      : instructions[i+3] + rBase // relative mode

      if (input1 < input2) {
        instructions[storage] = 1;
      } else {
        instructions[storage] = 0;
      }
    }

    if (currentInstruction.opCode === '08') {
      let input1 = currentInstruction.paramMode1 === '1' ? instructions[i+1] // immediate mode, literal
      : currentInstruction.paramMode1 === '2' ? instructions[instructions[i+1] + rBase] // relative mode
      : instructions[instructions[i+1]] // position mode

      let input2 = currentInstruction.paramMode2 === '1' ? instructions[i+2]
      : currentInstruction.paramMode2 === '2' ? instructions[instructions[i+2] + rBase]
      : instructions[instructions[i+2]]

      let storage = currentInstruction.paramMode3 === '0' ? instructions[i+3] // position mode
      : instructions[i+3] + rBase // relative mode

      if (input1 === input2) {
        instructions[storage] = 1;
      } else {
        instructions[storage] = 0;
      }
    }

    if (currentInstruction.opCode === '09') {
      let input1 = currentInstruction.paramMode1 === '1' ? instructions[i+1] // immediate mode, literal
      : currentInstruction.paramMode1 === '2' ? instructions[instructions[i+1] + rBase] // relative mode
      : instructions[instructions[i+1]] // position mode

      rBase += input1
    }

  }
}

function getOpCodeAndParams(instruction) {
  instruction = instruction.toString()
  let opCode = instruction[instruction.length-2] + instruction[instruction.length-1]
  let paramMode1 = instruction[instruction.length-3]
  let paramMode2 = instruction[instruction.length-4]
  let paramMode3 = instruction[0]

  return {
    opCode,paramMode1,paramMode2,paramMode3
  }

}

function getInstructionPointer(instruction, i, instructions, rBase) {
  instruction = prepender(instruction.toString())
  let opCodeAndParams = getOpCodeAndParams(instruction)

  if (
      opCodeAndParams.opCode === '03'
      || opCodeAndParams.opCode === '04'
      || opCodeAndParams.opCode === '09'
  ) return i + 2
  if (
      opCodeAndParams.opCode === '01'
      || opCodeAndParams.opCode === '02'
      || opCodeAndParams.opCode === '07'
      || opCodeAndParams.opCode === '08'
  ) return i + 4

  if (opCodeAndParams.opCode === '05') {
        let input1 = opCodeAndParams.paramMode1 === '1' ? instructions[i+1] // immediate mode, literal
        : opCodeAndParams.paramMode1 === '2' ? instructions[instructions[i+1] + rBase] // relative mode
        : instructions[instructions[i+1]] // position mode

        let input2 = opCodeAndParams.paramMode2 === '1' ? instructions[i+2]
        : opCodeAndParams.paramMode2 === '2' ? instructions[instructions[i+2] + rBase]
        : instructions[instructions[i+2]]

    if (input1 !== 0) {
      return input2
    } else {
      return i + 3
    }
  }

  if (opCodeAndParams.opCode === '06') {
        let input1 = opCodeAndParams.paramMode1 === '1' ? instructions[i+1] // immediate mode, literal
        : opCodeAndParams.paramMode1 === '2' ? instructions[instructions[i+1] + rBase] // relative mode
        : instructions[instructions[i+1]] // position mode

        let input2 = opCodeAndParams.paramMode2 === '1' ? instructions[i+2]
        : opCodeAndParams.paramMode2 === '2' ? instructions[instructions[i+2] + rBase]
        : instructions[instructions[i+2]]

    if (input1 === 0) {
      return input2
    } else {
      return i + 3
    }
  }
}

function prepender(instruction) {
  instruction = instruction.toString()
  let prepend = ''
  if (instruction.length <= 5) {
    for (let i = instruction.length; i < 5; i++) {
      prepend = `0` + prepend
    }
  }
  instruction = prepend.concat(instruction.toString())
  return instruction
}

console.log(intCodeComp(getInput(),0))
