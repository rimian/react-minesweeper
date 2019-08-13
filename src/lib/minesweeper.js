
export function getNearestIds(tiles, id) {
  return [id - 1, id + 1].filter((i) => i >=0 && i < tiles.cols);
}
