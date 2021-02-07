import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';
 
describe('Header', () => {
  test('Renders Header component', () => {
    render(<Header />);
  });

  test('Text should contain the words "National Park Explorer"', () => {
    render(<Header />);

    expect(screen.getByText(/National Park Explorer/)).toBeInTheDocument();
  });

  test('Menu link should be in the DOM', () => {
    render(<Header />);

    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
