function allLongestStrings(array) {
  //create dictionary holding all the strings of a particular length
  let longest = {};
  for (let i = 0; i < array.length; i++) {
    let elementLength = array[i].length;

    if (longest[elementLength] !== undefined) {
      longest[elementLength].push(array[i]);
    } else {
      longest[elementLength] = new Array();
      longest[elementLength].push(array[i]);
    }
  }

  //iterate over keys in longest to find highest key
  let highestKey = Object.keys(longest).sort((a, b) => b - a)[0];

  //return the values in that key
  return longest[highestKey];
}

// return array.sort((a, b) => b.length - a.length).filter(element => element.length == array[0].length);


/**
* Test Suite 
*/
describe('allLongestStrings()', () => {
  it('returns all longest strings', () => {
    // arrange
    const strings = ["aba", "aa", "ad", "vcd", "aba", "a"];

    // act
    const result = allLongestStrings(strings);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toEqual(["aba", "vcd", "aba"]);
  });
});