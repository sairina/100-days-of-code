/* Flatten a nested array. You must account for varying levels of nesting. */

function steamrollArray(arr) {
  let result = [];

  arr.forEach(ele => {
    Array.isArray(ele) ? result.push(...steamrollArray(ele)) : result.push(ele);
  });
  return result;
}

steamrollArray([1, [2], [3, [[4]]]]);
