/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
const reverse = arrayOfChars => {
  const swap = (arr, a, b) => {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  };
  for (let i = 0; i < arrayOfChars.length / 2; i += 1) {
    swap(arrayOfChars, i, arrayOfChars.length - i - 1);
  }
};

const assertEqual = (a, b, desc) => {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
};
//  Tests
let desc = 'empty string';
let input = ''.split('');
reverse(input);
let actual = input.join('');
let expected = '';
assertEqual(actual, expected, desc);

desc = 'single character string';
input = 'A'.split('');
reverse(input);
actual = input.join('');
expected = 'A';
assertEqual(actual, expected, desc);

desc = 'longer string';
input = 'ABCDE'.split('');
reverse(input);
actual = input.join('');
expected = 'EDCBA';
assertEqual(actual, expected, desc);
