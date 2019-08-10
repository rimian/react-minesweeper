import React from 'react';
import Tile from './Tile';

class Field extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Tile state='DEFAULT'/>
        <Tile state='DEFAULT'/>
      </React.Fragment>
    );
  }
}

export default Field;
