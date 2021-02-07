import React from 'react';
import { render, screen } from '@testing-library/react';
import ParkCard from '../components/ParkCard/ParkCard';
 
describe('ParkCard', () => {
  test('Renders ParkCard component', () => {
    render(<ParkCard />);
  });

  test('Image should be in the DOM', () => {
    render(<ParkCard />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  test('Learn More button should be in the DOM', () => {
    render(<ParkCard />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
