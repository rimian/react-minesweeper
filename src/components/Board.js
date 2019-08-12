import React from 'react';
import Tile from './Tile';
import { getNearestIds } from '../lib/minesweeper';

class Board extends React.Component {
  constructor(props) {
    super(props);
    const tiles = [...Array(this.props.cols).keys()].map((id) => ({ id: id + 1, value: 'DEFAULT' }));
    this.state = { tiles };
  }

  handleClick(i) {
    if(i > this.props.cols) {
      return;
    }

    const tiles = this.state.tiles;
    tiles[i - 1].value = 'BLANK';
    this.setState({ tiles });

    getNearestIds(tiles, i).map((id) => {
      this.handleClick(id);
    });
  }

  render() {
    const tiles = this.state.tiles.map((tile) => {
      return <Tile
        key={tile.id}
        value={tile.value}
        id={tile.id}
        onClick={() => this.handleClick(tile.id)}
      />
    });

    return (
      <div data-testid="board">
        {tiles}
      </div>
    );
  }
}

export default Board;
