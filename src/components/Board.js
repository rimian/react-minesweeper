import React from 'react';
import Tile from './Tile';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'DEFAULT' };
  }

  handleClick() {
    this.setState({ value: 'BLANK' });
  }

  render() {
    return (
      <div data-testid="board">
        <Tile
          data-testid={'tile-1'}
          value={this.state.value}
          onClick={() => this.handleClick()}
        />
        <Tile
          data-testid={'tile-2'}
          value={this.state.value}
          onClick={() => this.handleClick()}
        />
      </div>
    );
  }
}

export default Board;
