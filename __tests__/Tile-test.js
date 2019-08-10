import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react';
import Tile from '../Tile';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('tile changes the state after click', () => {
  const tile = render(
    <Tile/>,
  );

  console.warn(tile);
  //
  // expect(queryByLabelText(/off/i)).toBeTruthy();
  //
  // fireEvent.click(getByLabelText(/off/i));
  //
  // expect(queryByLabelText(/on/i)).toBeTruthy();
});
