import React from 'react';
import unitedStates from '../../utils/states.js';
import {
  Container,
  Button
} from '@material-ui/core';

function States() {
  const statesList = (unitedStates || []).map((state, i) =>
    <Button
      key={i}
      href={`/states/${state.name}/${state.abbreviation}`}
      value={state.name}
    >
      <div>
        <img src={state.image} alt={state.name} />
        <div>{state.name}</div>
      </div>
    </Button>
  );

  return (
    <Container>
      {statesList}
    </Container>
  )
}

export default States;
