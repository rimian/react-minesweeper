import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { onRevealTile } from '../lib/redux';

export default function Tile({ tile: { id, state }, onRevealTile }) {
  return (
    <div className={`tile ${state}`} onClick={() => onRevealTile(id)}></div>
  );
};

Tile.propTypes = {
  tile: PropTypes.shape({
    id: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onRevealTile: PropTypes.func,
};
