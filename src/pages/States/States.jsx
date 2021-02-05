import React from 'react';
import unitedStates from '../../utils/states.js';
import { Button } from '@material-ui/core';

function States(props) {
  const statesList = (unitedStates || []).map((state, i) =>
    <Button
      key={i}
      href={`/states/${state.name}/${state.abbreviation}`}
      value={state.name}
    >
      {state.abbreviation}
    </Button>
  );

  return (
    <div>{statesList}</div>
  )
}

export default States;
