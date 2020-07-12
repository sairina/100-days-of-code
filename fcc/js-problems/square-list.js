/* We have defined a function named squareList. You need to complete the code for the squareList function using any combination of map(), filter(), and reduce() so that it returns a new array containing only the square of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array containing only real numbers is [-3, 4.8, 5, 3, -3.2]. */

const squareList = (arr) => {
  // Only change code below this line
  
  //with filter and map
  // return arr.filter(num => (num > 0 && num % 1 === 0)).map(num => num * num);
  
  //with reduce
  return arr.reduce((acc, num) => {
    return num > 0 && (num % 1 === 0) ? [...acc, Math.pow(num, 2)] : acc;
  }, [])

  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
