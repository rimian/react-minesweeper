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
    const cols = [];
    for(let c = 0; c < this.props.cols; c++) {
      cols.push(<Tile
        key={c}
        value={this.state.value}
        id={c + 1}
        onClick={() => this.handleClick()}
      />);
    }

    return (
      <div data-testid="board">
        {cols}
      </div>
    );
  }
}

export default Board;
