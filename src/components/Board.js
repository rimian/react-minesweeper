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
          value={this.state.value}
          id="1"
          onClick={() => this.handleClick()}
        />
        <Tile
          id="2"
          value={this.state.value}
          onClick={() => this.handleClick()}
        />
      </div>
    );
  }
}

export default Board;
