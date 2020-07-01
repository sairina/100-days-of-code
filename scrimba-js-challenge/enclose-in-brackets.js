function encloseInBrackets(str) {
  //1. add ( to front and ) to end
  // return `(${str})`;
  //2. turn str to arr and unshift and push
  //     let arr = str.split('');
  //     arr.unshift(`(`);
  //     arr.push(`)`);
  //     return arr.join('');

  //3. use splice
  let arr = str.split('');
  arr.splice(0, 0, `(`);
  arr.push(`)`);
  return arr.join('');
}



/**
* Test Suite 
*/
describe('encloseInBrackets()', () => {
  it('adds () around a string', () => {
    // arrange
    const str = "Yo";

    // act
    const result = encloseInBrackets(str);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe('(Yo)');
  });
});