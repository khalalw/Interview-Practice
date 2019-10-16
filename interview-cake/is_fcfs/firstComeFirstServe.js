/* eslint-disable no-console */
const isFirstComeFirstServed = (takeOutOrders, dineInOrders, servedOrders) => {
  if (servedOrders.length !== takeOutOrders.length + dineInOrders.length) {
    return false;
  }

  const mergeArrays = (arr1, arr2) => {
    const res = [];
    while (arr1.length && arr2.length) {
      if (arr1[0] > arr2[0]) {
        res.push(arr2.shift());
      } else {
        res.push(arr1.shift());
      }
    }

    return res.concat(arr1.length ? arr1 : arr2);
  };

  // merge takeout and dine in order
  const mergedOrders = mergeArrays(takeOutOrders, dineInOrders);

  for (let i = 0; i < servedOrders.length; i++) {
    if (servedOrders[i] !== mergedOrders[i]) {
      return false;
    }
  }

  return true;
};

// TESTS
const assertEquals = (a, b, desc) => {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
};

let desc = 'both registers have same number of orders';
let actual = isFirstComeFirstServed([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6]);
assertEquals(actual, true, desc);

desc = 'registers have different lengths';
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 2, 6, 3, 5]);
assertEquals(actual, false, desc);

desc = 'one register is empty';
actual = isFirstComeFirstServed([], [2, 3, 6], [2, 3, 6]);
assertEquals(actual, true, desc);

desc = 'served orders is missing orders';
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 6, 3, 5]);
assertEquals(actual, false, desc);

desc = 'served orders has extra orders';
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 2, 3, 5, 6, 8]);
assertEquals(actual, false, desc);

desc = 'one register has extra orders';
actual = isFirstComeFirstServed([1, 9], [7, 8], [1, 7, 8]);
assertEquals(actual, false, desc);

desc = 'one register has unserved orders';
actual = isFirstComeFirstServed([55, 9], [7, 8], [1, 7, 8, 9]);
assertEquals(actual, false, desc);
