import { getNearestIds } from './minesweeper';

test('finds the nearest tiles', () => {
  expect(getNearestIds({}, 3)).toEqual([4]);
});

test('finds the nearest tiles', () => {
  expect(getNearestIds({}, 2)).toEqual([3]);
});
