/* eslint-disable no-console */
export const assertArrayEquals = (a, b, desc) => {
  // Sort the keys in each meeting to avoid
  // failing based on differences in key order.
  const orderedA = a.map(meeting => {
    return JSON.stringify(meeting, Object.keys(meeting).sort());
  });
  const orderedB = b.map(meeting => {
    return JSON.stringify(meeting, Object.keys(meeting).sort());
  });
  const arrayA = JSON.stringify(orderedA);
  const arrayB = JSON.stringify(orderedB);
  if (arrayA !== arrayB) {
    console.log(`${desc} ... FAIL: ${JSON.stringify(a)} != ${JSON.stringify(b)}`);
  } else {
    console.log(`${desc} ... PASS`);
  }
};

export const assertEqual = (a, b, desc) => {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
};
