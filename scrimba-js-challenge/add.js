function add(param1, param2) {
  return param1 + param2;
}

//adds any number of parameters
function add(...args) {
  return args.reduce((a, b) => a + b);
}


/**
* Test Suite 
*/
describe('add()', () => {
  it('adds two numbers', () => {
      // arrange
      const num1 = 1;
      const num2 = 2;
      
      // act
      const result = add(num1, num2);

      // log
      console.log("result: ", result);
      
      // assert
      expect(result).toBe(3);
  });
  
  xit('adds any ammount of numbers', () => {
      // arrange
      const num1 = 1;
      const num2 = 2;
      const num3 = 3
      
      // act
      const result = add(num1, num2, num3);

      // log
      console.log("result: ", result);
      
      // assert
      expect(result).toBe(6);
  });   
});