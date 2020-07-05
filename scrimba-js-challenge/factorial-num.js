function factorialNumber(num) {
  // let product = 1;
  
  // for(let i = 1; i <= num; i++) {
  //     product *= i;
  // }
  
  // return product;
  
  // if (num <= 1) return 1;
  // return num * factorialNumber(num - 1);

  return num <=1 ? 1 : num * factorialNumber(num - 1);
}



/**
* Test Suite 
*/
describe('factorialNumber()', () => {
  it('returns factorial of number param', () => {
      // arrange
      const num = 5;
      
      // act
      const result = factorialNumber(num);

      // log
      console.log("result: ", result);
      
      // assert
      expect(result).toBe(120);
  });
});