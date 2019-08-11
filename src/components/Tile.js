import React from 'react';
import '../index.css';

function Tile(props) {
  return (<button
    data-testid="tile"
    className={`tile ${props.value}`}
    onClick={props.onClick}
  ></button>);
}

export default Tile;
