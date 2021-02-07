import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UnitedStatesMap from '../pages/UnitedStatesMap/UnitedStatesMap';

describe('UnitedStatesMap', () => {
  test('Renders UnitedStatesMap component', () => {
    render(<UnitedStatesMap />)
  });

  test('Instructional text should be in the DOM', () => {
    render(<UnitedStatesMap />);

    expect(screen.getByText(/Click or tap on a state to view its National Parks/)).toBeInTheDocument();
  });

  // TODO: Test that map svg is in DOM

  // TODO: Test click event on each state
});
