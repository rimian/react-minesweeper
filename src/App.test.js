import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('renders the app without crashing', () => {
  const app = render(
    <App/>,
  );

  expect(app).toBeTruthy();
});
