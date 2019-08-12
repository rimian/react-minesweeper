import React from 'react';
import Tile from './Tile';
import { getNearestIds } from '../lib/minesweeper';

class Board extends React.Component {
  constructor(props) {
    super(props);
    const tiles = [...Array(this.props.cols).keys()].map(() => ({ value: 'DEFAULT' }));
    this.state = { tiles };
  }

  handleClick(i) {
    const tiles = this.state.tiles;
    tiles[i].value = 'BLANK';
    this.setState({ tiles });

    getNearestIds(this.props, i).map((id) => {
      this.handleClick(id);
    });
  }

  render() {
    const tiles = this.state.tiles.map((tile, i) => {
      return <Tile
        key={i}
        id={i}
        value={tile.value}
        onClick={() => this.handleClick(i)}
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
