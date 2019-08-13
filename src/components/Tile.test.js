import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { getByTestId } from '@testing-library/dom'
import Tile from './Tile';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('has a state', () => {
  const component = render(<Tile id="2" value='DEFAULT'/>);
  const element = getByTestId(document.body, 'tile-2');
  expect(element.classList).toContain('DEFAULT');
});

it('has exploded', () => {
  const component = render(<Tile id="2" value='EXPLODED'/>);
  const element = getByTestId(document.body, 'tile-2');
  expect(element.classList).toContain('EXPLODED');
});
