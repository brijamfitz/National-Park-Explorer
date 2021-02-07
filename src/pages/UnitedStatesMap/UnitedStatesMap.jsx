import './unitedStatesMap.scss';
import React from 'react';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';
import USAMap from 'react-usa-map';
import Header from '../../components/Header/Header';
import {
  Container,
  Grid
} from '@material-ui/core';

function UnitedStatesMap() {
  // TODO: Change the default title of the react-usa-map
 
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
    <>
      <Header />

      <Container maxWidth="lg">
        <div className="united-states-map__main">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <div className="united-states-map__heading">
              Click on a state to view its National Parks
            </div>

            <div className="united-states-map__map">
              <USAMap onClick={handleClick} />
            </div>
          </Grid>
        </div>
      </Container>
    </>
  )
}

export default UnitedStatesMap;
