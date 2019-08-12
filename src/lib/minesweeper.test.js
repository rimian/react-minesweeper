import { getNearestIds } from './minesweeper';

test('finds the nearest tiles either side', () => {
  expect(getNearestIds({ cols:  5 }, 0)).toEqual([1]);
});

test('finds the nearest tiles either side', () => {
  expect(getNearestIds({ cols: 6 }, 2)).toEqual([3]);
});

test('finds the nearest tiles for the right most tile', () => {
  expect(getNearestIds({ cols: 6 }, 5)).toEqual([]);
});
