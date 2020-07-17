/* 
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  let vowels = 'aeiouAEIOU';

  if (vowels.includes(str[0])) return str + 'way';

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      return str.slice(i) + str.slice(0, i) + 'ay';
    }
  }
  return str + 'ay';
}

translatePigLatin("consonant");
