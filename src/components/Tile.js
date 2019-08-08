import React from 'react';

export default function Tile({ tile: { id, state }, onRevealTile }) {
  return (
    <div className={`tile ${state}`} onClick={() => onRevealTile(id)}></div>
  );
}
