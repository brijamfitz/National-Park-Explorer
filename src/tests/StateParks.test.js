import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import StateParks from '../pages/StateParks/StateParks';

describe('StateParks', () => {
  // Mock props from the URL match
  const props = {
    match: {
      params: {
        stateName: 'Pennsylvania',
        stateAbbr: 'PA'
      }
    }
  };
  const emptyProps = {
    match: {
      params: {
        stateName: '',
        stateAbbr: ''
      }
    }
  };

  test('Renders StateParks component', () => {
    render(<StateParks {...props} />);
  });
  
  test('Loads and displays state park cards', () => {
    render(<StateParks {...props} />);
    expect(screen.getByText(/Pennsylvania National Parks/)).toBeInTheDocument();
  });
  
  test('Handles empty URL params with default to all USA parks', async () => {
    render(<StateParks {...emptyProps} />);
    expect(screen.getByText('United States National Parks')).toBeInTheDocument();
  });
});
