import './unitedStatesMap.scss';
import React from 'react';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';
import USAMap from 'react-usa-map';

function UnitedStatesMap() {
  // The react-router useHistory hook gives us access to our history instance
  // This object provides us with the ability to navigate within the app
  const history = useHistory();

  // Required event handling for the USAMaps component
  // Retrieve the required values from the target
  // Use the push method available from the useHistory hook to navigate to the state-specific page
  const handleClick = (evt) => {
    const stateName = evt.target.textContent || '';
    const stateAbbr = evt.target.dataset?.name || '';

    history.push(`/${!_.isEmpty(stateName) ? stateName : 'Washington, D.C.'}/${stateAbbr}`);
  }

  return (
    <USAMap onClick={handleClick} />
  )
}

export default UnitedStatesMap;
