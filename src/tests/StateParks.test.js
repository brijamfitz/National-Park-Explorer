import React from 'react';
import { render, screen } from '@testing-library/react';
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

  test('Renders StateParks component', () => {
    render(<StateParks {...props} />)
  });
  
  // TODO: Test API data fetching
});
