import React from 'react';
import '../index.css';

class Tile extends React.Component {
  render() {
    return <button className={`tile ${this.props.state}`}></button>;
  }
}

export default Tile;
