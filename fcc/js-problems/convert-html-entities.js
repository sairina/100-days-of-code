/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
  let chars = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  }

  let strArr = str.split('');

  for (let i = 0; i < strArr.length; i++) {
    if (chars[strArr[i]]) {
      strArr[i] = chars[strArr[i]];
    }
  }
  return strArr.join('');
}

convertHTML("Hamburgers < Pizza < Tacos");
