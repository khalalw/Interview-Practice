const hasPalindromePermutation = str => {
  if (str.length === 1 || str.length.length === 0) {
    return true;
  }
  const letters = new Set();

  for (let i = 0; i < str.length; i += 1) {
    if (letters.has(str[i])) {
      letters.delete(str[i]);
    } else {
      letters.add(str[i]);
    }
  }

  return letters.size <= 1;
};

// tests
const assertEqual = (a, b, desc) => {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
};

let desc = 'permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcbcd'), true, desc);

desc = 'permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabccbdd'), true, desc);

desc = 'no permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcd'), false, desc);

desc = 'no permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabbcd'), false, desc);

desc = 'empty string';
assertEqual(hasPalindromePermutation(''), true, desc);

desc = 'one character string ';
assertEqual(hasPalindromePermutation('a'), true, desc);
