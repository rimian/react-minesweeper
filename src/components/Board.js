import React from 'react';
import Tile from './Tile';

class Board extends React.Component {
  constructor(props) {
    super(props);
    const tiles = [...Array(this.props.cols).keys()].map((id) => ({ id, value: 'DEFAULT' }));
    this.state = { tiles, value: 'DEFAULT' };
  }

  handleClick(i) {
    if(i + 1 > this.props.cols) {
      return;
    }
    const tiles = this.state.tiles;
    tiles[i].value = 'BLANK';
    this.setState({ tiles });
    this.handleClick(i + 1);
  }

  render() {
    const tiles = this.state.tiles.map((tile) => {
      return <Tile
        key={tile.id}
        value={tile.value}
        id={tile.id + 1}
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
