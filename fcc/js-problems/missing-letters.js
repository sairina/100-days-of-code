/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) + 1 !== str.charCodeAt(i + 1)) {
      if (str.charCodeAt(i) + 1 <= 122 && str.charCodeAt(i) + 1 >= 99){
        return String.fromCharCode(str.charCodeAt(i) + 1);
      }
    }
  }
  return;
}

fearNotLetter("abcdefghijklmnopqrstuvwxyz");
