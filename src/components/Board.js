import React from 'react';
import Tile from './Tile';

class Board extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Tile/>
        <Tile/>
      </React.Fragment>
    );
  }
}

export default Board;
