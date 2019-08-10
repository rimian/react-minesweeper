import React from 'react';
import Tile from './Tile';

class Field extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Tile/>
        <Tile/>
      </React.Fragment>
    );
  }
}

export default Field;
