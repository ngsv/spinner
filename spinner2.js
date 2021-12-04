
let spinner = [
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
  "\r|"
];

let timer = 100;

for (const spin of spinner) {
  timer += 200;
  setTimeout(() => process.stdout.write(spin), timer);
}

setTimeout(() => process.stdout.write("\n"), timer);
