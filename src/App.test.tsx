import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Select Items exists', () => {
  render(<App />);
  
  const title = screen.getByText(/Select Items/i);
  expect(title).toBeInTheDocument();
});
