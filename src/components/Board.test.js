import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { getByTestId } from '@testing-library/dom'
import Board from './Board';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('board is existing', () => {
  const component = render(
    <Board/>,
  );

  const element = getByTestId(document.body, 'board');

  expect(element).toBeTruthy();
});
