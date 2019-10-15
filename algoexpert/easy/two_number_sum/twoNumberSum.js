function twoNumberSum(array, targetSum) {
  const numSet = new Set();

  for (let i = 0; i < array.length; i++) {
    const curr = array[i];
    const addend = targetSum - curr;

    if (numSet.has(addend)) {
      return [Math.min(addend, curr), Math.max(addend, curr)];
    }

    numSet.add(curr);
  }

  return [];
}
