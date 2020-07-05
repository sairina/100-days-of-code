function firstDigit(str) {
  // let digit = '0123456789';
  // let arr = str.split('');
  // for (let i = 0; i < arr.length; i++) {
  //     if (digit.includes(arr[i])) {
  //         return arr[i];
  //     }
  // }
  
  return str.split('').find(char => parseInt(char));
}



/**
* Test Suite 
*/
describe('firstDigit()', () => {
  it('return the first digit in a string', () => {
      // arrange
      const str = "var_1__Int2";
      
      // act
      const result = firstDigit(str);

      // log
      console.log("result: ", result);
      
      // assert
      expect(result).toBe('1');
  });
});