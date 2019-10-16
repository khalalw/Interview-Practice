/* eslint-disable no-param-reassign */
/* eslint-disable no-console */

function reverseWords(message) {
  const reverseCharacters = (msg, leftIndex, rightIndex) => {
    while (leftIndex < rightIndex) {
      const temp = msg[leftIndex];
      msg[leftIndex] = msg[rightIndex];
      msg[rightIndex] = temp;
      leftIndex += 1;
      rightIndex -= 1;
    }
  };
  reverseCharacters(message, 0, message.length - 1);
  let currentWordStartIndex = 0;
  for (let i = 0; i <= message.length; i += 1) {
    if (i === message.length || message[i] === ' ') {
      reverseCharacters(message, currentWordStartIndex, i - 1);
      currentWordStartIndex = i + 1;
    }
  }
}

const assertEqual = (a, b, desc) => {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
};
// Tests
let desc = 'one word';
let input = 'vault'.split('');
reverseWords(input);
let actual = input.join('');
let expected = 'vault';
assertEqual(actual, expected, desc);

desc = 'two words';
input = 'thief cake'.split('');
reverseWords(input);
actual = input.join('');
expected = 'cake thief';
assertEqual(actual, expected, desc);

desc = 'three words';
input = 'one another get'.split('');
reverseWords(input);
actual = input.join('');
expected = 'get another one';
assertEqual(actual, expected, desc);

desc = 'multiple words same length';
input = 'rat the ate cat the'.split('');
reverseWords(input);
actual = input.join('');
expected = 'the cat ate the rat';
assertEqual(actual, expected, desc);

desc = 'multiple words different lengths';
input = 'yummy is cake bundt chocolate'.split('');
reverseWords(input);
actual = input.join('');
expected = 'chocolate bundt cake is yummy';
assertEqual(actual, expected, desc);

desc = 'empty string';
input = ''.split('');
reverseWords(input);
actual = input.join('');
expected = '';
assertEqual(actual, expected, desc);
