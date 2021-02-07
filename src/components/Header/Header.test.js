import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
 
describe('Header', () => {
  test('Renders Header component', () => {
    render(<Header />);
  });

  test('Text should contain the words "National Park"', () => {
    render(<Header />);

    expect(screen.getByText(/National Park/)).toBeInTheDocument();
  });

  test('Menu link should exist', () => {
    render(<Header />);

    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});