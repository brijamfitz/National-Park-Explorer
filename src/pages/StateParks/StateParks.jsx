import React, { useState, useEffect } from 'react';

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

  const parksList = (parks || []).map(park =>
    <li key={park.id}>{park.fullName}</li>)

  return (
    <ul>
      {parksList}
    </ul>
  );
}

export default StateParks;
