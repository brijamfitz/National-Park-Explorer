import './states.scss';
import React from 'react';
import unitedStates from '../../utils/states.js';
import { Button } from '@material-ui/core';
import USAMap from "react-usa-map";

export const mapHandler = (event) => {
  console.log(event.target.dataset);
};

function States() {
  const statesList = (unitedStates || []).map((state, i) =>
    <Button
      key={i}
      href={`/states/${state.name}/${state.abbreviation}`}
      variant="contained"
    >
      <div>
        <img src={state.image} alt={state.name} />
        <div>{state.name}</div>
      </div>
    </Button>
  );

  return (
    <div className="states">
      <USAMap onClick={mapHandler} />
    </div>
  )
}

export default States;
