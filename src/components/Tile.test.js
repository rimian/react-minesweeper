import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { getByTestId } from '@testing-library/dom'
import Tile from './Tile';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('tile is blank by default', () => {
  const component = render(
    <Tile/>,
  );

  const element = getByTestId(document.body, 'tile');

  expect(element.classList).toContain('DEFAULT');
});

it('tile is revealed', () => {
  const component = render(
    <Tile/>,
  );

  const element = getByTestId(document.body, 'tile');
  fireEvent.click(element);

  expect(element.classList).toContain('BLANK');
});
