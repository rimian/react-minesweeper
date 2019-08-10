import React from 'react';
import Tile from './Tile';

class Board extends React.Component {
  render() {
    return (
      <div data-testid="board">
        <Tile/>
        <Tile/>
      </div>
    );
  }
}

export default Board;
