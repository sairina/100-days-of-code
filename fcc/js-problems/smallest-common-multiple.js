/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr) {
  arr.sort((a,b) => b - a);

  //make full arr
  let fullArr = [];
  for (let i = arr[0]; i >= arr[1]; i--) {
    fullArr.push(i);
  }

  //find LCM with GCD
  let lCM = fullArr[0];
  for (let i = 1; i < fullArr.length; i++) {
    let gCD = findGCD(lCM, fullArr[i]);
    lCM = (lCM * fullArr[i]) / gCD;
  }

  return lCM;

  //implement Euclidean Algorithm to find GCD
  function findGCD(a, b) {
    let remainder;
    while ((a % b) > 0) {
      remainder = a % b;
      a = b;
      b = remainder;
    }
    return b;
  }
}



smallestCommons([1, 5]); 

