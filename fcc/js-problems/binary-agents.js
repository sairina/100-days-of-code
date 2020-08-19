/* Return an English translated sentence of the passed binary string.

The binary string will be space separated. */

function binaryAgent(str) {
  let decimalArr = [];
  let arr = str.split(' ');

  //change from binary string to array of decimals
  for (let binaryStr of arr) {
    decimalArr.push(parseInt(binaryStr, 2));
  }

  //change from decimal to string to letters
  for (let i = 0; i < decimalArr.length; i++) {
    let strNum = decimalArr[i].toString();
    decimalArr[i] = String.fromCharCode(strNum);
  }

  return decimalArr.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
