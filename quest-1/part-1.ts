// bun --watch part-1.ts

const path = "input-1.txt";
const file = Bun.file(path);

const text = await file.text();

let [names_raw, _, instructions_raw] = text.split("\n");

let names: string[] = names_raw.split(",");
let instructions: string[] = instructions_raw.split(",");

console.log(names);
console.log(instructions);

let currentPosition = 0;
let maxPosition = names.length - 1;

instructions.forEach((instruction) => {
  let [direction, amount] = instruction.split("");
  switch (direction) {
    case "L":
      currentPosition = Math.max(0, currentPosition - parseInt(amount));
      break;
    case "R":
      currentPosition = Math.min(
        maxPosition,
        currentPosition + parseInt(amount)
      );
      break;
  }
  console.log(currentPosition);
});

console.log(names[currentPosition]);
