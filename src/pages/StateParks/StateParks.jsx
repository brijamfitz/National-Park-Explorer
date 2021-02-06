import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import ParkCard from '../../components/ParkCard/ParkCard';
import {
  Container,
  Grid,
  Typography,
  CircularProgress
} from '@material-ui/core';
import Header from '../../components/Header/Header';

// Declaring the info we need to build our API query url
const apiKey = process.env.REACT_APP_NPS_API_KEY;
const baseUrl = 'https://developer.nps.gov/api/v1/parks';

function StateParks(props) {
  // Establish state variables
  const [parks, setParks] = useState(0);
  const [isFetching, setFetching] = useState(false);

  // Grab the state's full name and abbreviation code from the url params
  // This is available to us through the props.match object
  const stateName = props.match.params.stateName;
  const stateAbbr = props.match.params.stateAbbr;

  useEffect(() => {
    searchStateParks(stateAbbr)
    .then(res => {
      // When the fetch resolves, set the parks state to the response data
      // Set the isFetching state back to false
      setParks(res.data);
      setFetching(false);
    })
  }, [stateAbbr]);

  const searchStateParks = (stateAbbr) => {
    // Build the API query url and append the state abbreviation as the query param
    const url = new URL(baseUrl);
    url.searchParams.append('stateCode', stateAbbr)

    // Set the isFetching state to true
    setFetching(true);
  
    // TODO: Need to handle error
    return fetch(url, { headers: { 'X-Api-Key': apiKey } }).then(res => res.json());
  }

  const parksList = (parks || []).map((park, i) =>
    <ParkCard
      key={i}
      park={park}
    />
  )

  return (
    <>
      <Header />

      <Container>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="p"
          align="center"
        >
          {`${!_.isEmpty(stateAbbr) ? stateName : 'United States'} National Parks`}
        </Typography>
        <Grid
          container
          spacing={3}
          alignItems="stretch"
        >
          {!isFetching ? parksList : <CircularProgress />}
        </Grid>
      </Container>
    </>
  );
}

export default StateParks;
