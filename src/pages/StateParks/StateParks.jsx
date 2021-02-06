import React, { useState, useEffect } from 'react';
import ParkCard from '../../components/ParkCard/ParkCard';
import {
  Container,
  Grid,
  Typography
} from '@material-ui/core';

const apiKey = process.env.REACT_APP_NPS_API_KEY;
const baseUrl = 'https://developer.nps.gov/api/v1/parks';

export const searchStateParks = (state) => {
  const url = new URL(baseUrl);
  url.searchParams.append('stateCode', state)

  return fetch(url, { headers: { 'X-Api-Key': apiKey } }).then(res => res.json());
}

function StateParks(props) {
  const [parks, setParks] = useState(0);
  const stateName = props.match.params.stateName || '';
  const stateAbbr = props.match.params.abbreviation || '';

  useEffect(() => {
    searchStateParks(stateAbbr).then(res => setParks(res.data))
  }, [stateAbbr]);

  const parksList = (parks || []).map((park, i) =>
    <ParkCard
      key={i}
      park={park}
    />
  )

  return (
    <Container>
      <Typography
        color="textPrimary"
        gutterBottom
        variant="h2"
        align="center"
      >
        {`${stateName} National Parks`}
      </Typography>
      <Grid
        container
        spacing={3}
        alignItems="stretch"
      >
        {parksList}
      </Grid>
    </Container>
  );
}

export default StateParks;
