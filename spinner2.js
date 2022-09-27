const characterSpinner = function(iteration) {
  if (iteration % 4 === 0) {
    return '\r|   ';
  }
  if (iteration % 4 === 1) {
    return '\r/   ';
  }
  if (iteration % 4 === 2) {
    return '\r-   ';
  }
  if (iteration % 4 === 3) {
    return '\r\\   ';
  }
};

let delay = 100;
for (let i = 0; i < 9; i++) {
  let printer = characterSpinner(i);
  setTimeout(() => {
    process.stdout.write(printer);
  }, delay);
  delay += 200;
}

setTimeout(() => {
  process.stdout.write("\n");
}, delay);
