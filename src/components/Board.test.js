import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { getAllByTestId, getByTestId } from '@testing-library/dom'
import Board from './Board';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('board exists', () => {
  const component = render(<Board/>);
  const element = getByTestId(document.body, 'board');
  expect(element).toBeTruthy();
});

it('has buttons', () => {
  const { container } = render(<Board />);
  const buttons = container.querySelectorAll('button.DEFAULT');
  expect(buttons.length).toEqual(2);
});

it('changes the tiles to revealed', () => {
  const { container, getByTestId } = render(<Board />);
  fireEvent.click(getByTestId('tile-1'))
  const buttons = container.querySelectorAll('button.BLANK');
  expect(buttons.length).toEqual(2);
});