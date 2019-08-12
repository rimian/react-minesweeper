import { getNearestIds } from './minesweeper';

test('finds the nearest tile', () => {
  expect(getNearestIds(3)).toEqual(4);
});

test('finds the nearest tile', () => {
  expect(getNearestIds(2)).toEqual(3);
});
