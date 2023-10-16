// Таск 1
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray);

// Таск 2
function multiply(multiplier, ...args) {
  return args.map((value) => multiplier * value);
}

const result = multiply(4, 9, 83, 3);
console.log(result);