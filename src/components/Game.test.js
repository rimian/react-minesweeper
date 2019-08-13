import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Game from './Game';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('renders the game without crashing', () => {
  const app = render(<Game/>);
  expect(app).toBeTruthy();
});
