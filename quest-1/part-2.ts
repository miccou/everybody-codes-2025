// bun --watch part-2.ts

const path = "input-2.txt";
const file = Bun.file(path);

const text = await file.text();

let [names_raw, _, instructions_raw] = text.split("\n");

let names: string[] = names_raw.split(",");
let instructions: string[] = instructions_raw.split(",");

let wrapNumber = (value: number, min: number, max: number) => {
  max++;
  let remainder = value % max;
  return remainder < min ? max + remainder : remainder;
};

console.log(names);
console.log(instructions);

let currentPosition = 0;
let maxPosition = names.length - 1;

instructions.forEach((instruction) => {
  let direction = instruction[0];
  let amount = instruction.slice(1);

  console.log(amount);
  switch (direction) {
    case "L":
      currentPosition = wrapNumber(
        currentPosition - parseInt(amount),
        0,
        maxPosition
      );
      break;
    case "R":
      currentPosition = wrapNumber(
        currentPosition + parseInt(amount),
        0,
        maxPosition
      );
      break;
  }
  console.log(currentPosition);
});

console.log(names[currentPosition]);
