import React, { useState, useEffect } from 'react';
import ParkCard from '../../components/ParkCard/ParkCard';
import Grid from '@material-ui/core/Grid';

const apiKey = process.env.REACT_APP_NPS_API_KEY;
const baseUrl = 'https://developer.nps.gov/api/v1/parks';

export function searchStateParks(state) {
  const url = new URL(baseUrl);
  url.searchParams.append('stateCode', state)

  return fetch(url, { headers: { 'X-Api-Key': apiKey } }).then(res => res.json());
}

function StateParks(props) {
  const [parks, setParks] = useState(0);
  const state = props.match.params.abbreviation || '';

  useEffect(() => {
    searchStateParks(state).then(res => setParks(res.data))
  }, [state]);

  const parksList = (parks || []).map((park, i) =>
    <ParkCard
      key={i}
      park={park}
    />
  )

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="flex-start"
      >
        {parksList}
      </Grid>
    </div>
  );
}

export default StateParks;
