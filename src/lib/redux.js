// A simple redux store/actions/reducer implementation.
// A true app would be more complex and separated into different files.
import { createStore } from 'redux';

// The actions are the "names" of the changes that can happen to the store
export const actions = {
  REVEAL_TILE: 'REVEAL_TILE',
};

// The action creators are how you bundle actions with the data required to execute them
export const revealTile = id => ({ type: actions.REVEAL_TILE, id });

// All our reducers simply change the state of a single tile.
function tileStateReducer(tileState) {
  return (state, action) => {
    return {
      ...state,
      tiles: state.tiles.map(
        tile => (tile.id === action.id ? { ...tile, state: tileState } : tile)
      ),
    };
  };
}

// The reducer describes how the contents of the store change for each action
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.REVEAL_TILE:
        return tileStateReducer('REVEAL_TILE')(state, action);
    default:
      return state;
  }
};

// The initial state of our store when the app loads.
// Usually you would fetch this from a server
const defaultTiles = [
  { id: '1', state: 'DEFAULT' },
  { id: '2', state: 'DEFAULT' },
  { id: '3', state: 'DEFAULT' },
  { id: '4', state: 'DEFAULT' },
];

  // We export the constructed redux store
export default createStore(reducer, { tiles: defaultTiles });
