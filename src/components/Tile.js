import React from 'react';
import '../index.css';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'DEFAULT',
    };
  }

  render() {
    return <button
      data-testid="tile"
      className={`tile ${this.state.value}`}
      onClick={() => this.setState({ value: 'BLANK' })}>
    </button>;
  }
}

export default Tile;
