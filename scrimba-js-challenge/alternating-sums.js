function alternatingSums(array) {
  let even = 0; 
  let odd = 0;
  for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
          even += array[i];
      } else {
          odd += array[i];
      }
  }
  return [even, odd];
}



/**
* Test Suite 
*/
describe('alternatingSums()', () => {
  it('returns alternating sums of even and odd', () => {
      // arrange
      const nums = [50, 60, 60, 45, 70];
      
      // act
      const result = alternatingSums(nums);

      // log
      console.log("result: ", result);
      
      // assert
      expect(result).toEqual([180, 105]);
  });
});