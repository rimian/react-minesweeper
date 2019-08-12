
export function getNearestIds(tiles, id) {
  return [id + 1].filter((i) => i < tiles.cols);
}
