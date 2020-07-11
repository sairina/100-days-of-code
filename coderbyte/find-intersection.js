/*
Find Intersection
Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
Examples
Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
Output: 1,4,13
Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
Output: 1,9,10
*/

function FindIntersection(strArr) { 
  let arr = [];
  let first = stringToNum(strArr[0]);
  let second = stringToNum(strArr[1]);
  
  let joinedArr = first.concat(second);
  
  let hashMapArr = freqCounter(joinedArr);
  
  for (let key in hashMapArr) {
    if (hashMapArr[key] === 2) {
      arr.push(key);
    }
  }

  return arr.sort((a, b) => a - b).join(); 

}

function stringToNum (str) {
  return str.split(', ').map(num => +num);
}

function freqCounter (arr) {
  let obj = {};
  for (let num of arr) {
    if (obj[num] === undefined) {
      obj[num] = 1;
    } else {
      obj[num] += 1;
    }
  }
  return obj;
}
   
// keep this function call here 
console.log(FindIntersection(readline()));