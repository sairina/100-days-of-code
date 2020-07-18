/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {
  let arr = [];
  
  for (let base of str) {
    if (base === 'G') {
      arr.push(['G', 'C']);
    } else if (base === 'C') {
      arr.push(['C', 'G']);
    } else if (base === 'A') {
      arr.push(['A', 'T']);
    } else {
      arr.push(['T', 'A']);
    }
  }
  return arr;
}

pairElement("GCG");
