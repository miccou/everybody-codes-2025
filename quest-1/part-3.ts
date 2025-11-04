// bun --watch part-3.ts

const path = "input-3.txt";
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

instructions.forEach((instruction) => {
  let direction = instruction[0];
  let swapIndex = wrapNumber(
    parseInt(instruction.slice(1)),
    0,
    names.length - 1
  );

  if (swapIndex != 0) {
    let topName = names[0];

    console.log(swapIndex);
    switch (direction) {
      case "L":
        console.log(
          `replacing ${topName} with ${names[names.length - swapIndex]}`
        );
        names[0] = names[names.length - swapIndex];
        names[names.length - swapIndex] = topName;

        break;
      case "R":
        console.log(`replacing ${topName} with ${names[swapIndex]}`);
        names[0] = names[swapIndex];
        names[swapIndex] = topName;

        break;
    }
  }
});

console.log(names[currentPosition]);
