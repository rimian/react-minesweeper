import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { getByTestId } from '@testing-library/dom'
import Tile from './Tile';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('tile has a state', () => {
  const component = render(
    <Tile value='DEFAULT'/>,
  );

  const element = getByTestId(document.body, 'tile');

  expect(element.classList).toContain('DEFAULT');
});
