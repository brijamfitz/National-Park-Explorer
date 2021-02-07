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

const UnitedStatesMap = () => {
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

  // This cleanup removes the default title of the react-usa-map
  // On hover it would display 'Blank map of United States'
  setTimeout(() => {
    const mapElem = document.querySelector('.united-states-map__map');
    if (mapElem !== null) mapElem.querySelector('title').remove();
  }, 1000);

  return (
    <>
      <Header />

      <Container maxWidth="lg">
        <div className="united-states-map__container">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <div className="united-states-map__heading">
              Click or tap on a state to view its National Parks
            </div>

            <div className="united-states-map__map" data-testid="united-states-map__svg">
              <USAMap onClick={handleClick} />
            </div>
          </Grid>
        </div>
      </Container>
    </>
  )
}

export default UnitedStatesMap;
