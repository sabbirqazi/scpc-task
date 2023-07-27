
//1
const reverseStr = (str) =>{
  let reverseString = '';
   for(let i=str.length-1; i >=0; i-- ){
     reverseString += str[i];
   }
   return reverseString;
}
console.log(reverseStr("hello world"))

//2
const positiveSum = (arr) =>{
   let total = 0;
  for( let i=0; i <arr.length; i++){
    if(arr[i] > 0){
        total += arr[i];
    }
  }
  return total;
}

const arr = [2, -5, 10, -3, 7]
console.log(positiveSum(arr));

//3
const findMostFrequentElement = (myArray) => {
  const elementCount = {};

  myArray.forEach((element) => {
    if (elementCount[element]) {
      elementCount[element]++;
    } else {
      elementCount[element] = 1;
    }
  });

  let mostFrequentElement;
  let maxCount = 0;
  for (const element in elementCount) {
    if (elementCount[element] > maxCount) {
      maxCount = elementCount[element];
      mostFrequentElement = element;
    }
  }

  return mostFrequentElement;
};


const myArray = [1, 2, 3, 2, 1, 3, 2, 2, 4];
const mostFrequent = findMostFrequentElement(myArray);
console.log("The most frequent element is:", mostFrequent);


//4
function findTwoNumbersWithSum(numbers, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}

const numbers = [1, 3, 6, 8, 11, 15];
const target = 4;
const result = findTwoNumbersWithSum(numbers, target);
console.log("Example Output:", result); 

//5
const calculator = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      return num1 / num2;
    default:
      throw new Error("Invalid operator. Supported operators are +, -, *, and /.");
  }
};


const num1 = 5;
const operator = '-';
const num2 = 3;

try {
  const result = calculator(num1, operator, num2);
  console.log("Result:", result);
} catch (error) {
  console.error("Error:", error.message);
}


//7 
const romanToInt = (romanNumeral) => {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let prevValue = 0;

  for (let i = romanNumeral.length - 1; i >= 0; i--) {
    const currentSymbol = romanNumeral[i];
    const currentValue = romanNumerals[currentSymbol];

    if (currentValue < prevValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }

    prevValue = currentValue;
  }

  return result;
};


console.log(romanToInt("IX")); 
console.log(romanToInt("XXI")); 
//8
const findSecondSmallest = (arrayOfNumbers) => {
  if (arrayOfNumbers.length < 2) {
    throw new Error("Array must have at least two elements.");
  }


  const sortedArr = arrayOfNumbers.slice().sort((a, b) => a - b);

  
  return sortedArr[1];
};

const myNumbers = [7, 2, 8, 3, 1, 6, 4, 5];
const secondSmallest = findSecondSmallest(myNumbers);
console.log("Second Smallest:", secondSmallest);
