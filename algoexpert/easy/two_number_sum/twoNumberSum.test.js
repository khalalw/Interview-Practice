/* eslint-disable no-undef */
import twoNumberSum from './twoNumberSum';

test('Test Case #1', () => {
  expect(twoNumberSum([4, 6], 10)).toEqual([4, 6]);
});

test('Test Case #2', () => {
  expect(twoNumberSum([4, 6, 1], 5)).toEqual([1, 4]);
});

test('Test Case #3', () => {
  expect(twoNumberSum([4, 6, 1, -3], 3)).toEqual([-3, 6]);
});

test('Test Case #4', () => {
  expect(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)).toEqual([-1, 11]);
});

test('Test Case #5', () => {
  expect(twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17)).toEqual([8, 9]);
});

test('Test Case #6', () => {
  expect(twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18)).toEqual([3, 15]);
});

test('Test Case #7', () => {
  expect(twoNumberSum([-7, -3 - 1, 0, 1, 3, 5, 7], -5)).toEqual([-5, 0]);
});

test('Test Case #8', () => {
  expect(twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163)).toEqual([-47, 210]);
});

test('Test Case #9', () => {
  expect(twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 164)).toEqual([]);
});

test('Test Case #10', () => {
  expect(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 15)).toEqual([]);
});
