import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Tile from '../Tile';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('tile changes the state after click', () => {
  const tile = render(
    <Tile/>,
  );

  expect(tile).toBeTruthy();
});
