function sumDigits(num) {
  // string methods
  // return num.toString().split('').map(num => +num).reduce((num, acc) => +num + acc, 0);

  // mathematical operation
  // let sum = 0;

  // while (num) {
  //   sum += num % 10;
  //   num = Math.floor(num/10);
  // }

  // return sum;

  //recursively
  if (num === 0) return 0;
  return (num % 10) + sumDigits(Math.floor(num/10));
}
sumDigits(123) //6