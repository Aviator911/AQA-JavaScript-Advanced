//task1
// Function Declaration
function declarationFunction(a, b) {
    return a > b ? a : b;
  }
  
  // Function Expression
  const expressionFunction = function(a, b) {
    return a < b ? b : a;
  };
  
  // Arrow Function
  const arrowFunction = (a, b) => (a + b) * 2;
  
  console.log(declarationFunction(5, 10)); // 10
  console.log(expressionFunction(8, 3));   // 8
  console.log(arrowFunction(4, 7));       // 22
//task2
function recursiveFunction(value) {
    if (value <= 20) {
      console.log(value);
      recursiveFunction(value + 1);
    }
  }
  
  recursiveFunction(2);
//task3
let nestedArray = [
    ["apple", "banana", "dog"],
    ["cherry", "cat", "elephant"],
    ["red", "green", "cat"]
  ];
  
  function findCat(arr) {
    for (let subArray of arr) {
      if (subArray.includes("cat")) {
        return true;
      }
    }
    return false;
  }
  
  console.log(findCat(nestedArray)); // true
  //task4

  function divideArray(numbers) {
    let result = [];
  
    try {
      if (numbers.length < 2) {
        throw new Error("Not enough elements in the array.");
      }
  
      for (let i = 1; i < numbers.length; i++) {
        if (typeof numbers[i] !== "number" || numbers[i - 1] === 0) {
          throw new Error("Invalid division");
        }
  
        result.push(numbers[i] / numbers[i - 1]);
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      console.log("Робота завершена");
    }
  
    return result;
  }
  
  console.log(divideArray([10, 2, 5]));   // Результат
  console.log(divideArray([5, 0, 2]));    // Помилка
  console.log(divideArray([10, 'abc', 2]));// Помилка
  console.log(divideArray([3]));          // Помилка

//task5a
const array = [1, 8, 10, 11, -8, 17, 20, 22, 40, 37, 45, 0, 3, 45, 56];

const oddNumbers = array.filter(number => number % 2 !== 0);
console.log(oddNumbers);
//task5b
const arrayColors = ["yellow", "green", "apple", "red", "pink"];

arrayColors.sort();
console.log(arrayColors);
//task6
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = array1.concat(array2);
console.log(combinedArray);
//task7
const numbers = [10, 20, 30, 40, 50];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);
