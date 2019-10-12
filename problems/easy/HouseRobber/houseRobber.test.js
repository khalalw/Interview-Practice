/* eslint-disable no-undef */
import rob from './houseRobber';

test('Works with four houses', () => {
  expect(rob([1, 2, 3, 1])).toBe(4);
});

test('Works with five houses', () => {
  expect(rob([2, 7, 9, 3, 1])).toBe(12);
});

test('Works with empty array', () => {
  expect(rob([])).toBe(0);
});

test('Works with one array value', () => {
  expect(rob([1])).toBe(1);
});
