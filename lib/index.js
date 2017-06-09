

// range: (number, number) => number[]
const range = (start, end) => {
  // todo
  // for loops allowed
  let x = [];
  while (start < end) {
    x.push(start);
    start = start + 1;
  }
  return x;
};

// type Config = [number, string][]

// config: Config
const config = [[3, 'Fizz'], [5, 'Buzz']];

// fizzbuzz: (number[], Config) => undefined
const fizzbuzz = (range, config) => {
  Array.from(range).forEach(arg => {
    if (arg % config[0][0] === 0) {
      console.log(config[0][1]);
    }
    if (arg % config[1][0] === 0) {
      console.log(config[1][1]);
    }
  });
};

fizzbuzz(range(1, 115), config);