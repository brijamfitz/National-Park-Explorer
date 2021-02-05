import React from 'react';
import unitedStates from '../../utils/states.js';
import { Button } from '@material-ui/core';
import LoginIcon from '@material-ui/icons/AccountCircle';

const apiKey = process.env.REACT_APP_NPS_API_KEY;
const baseUrl = 'https://developer.nps.gov/api/v1';

console.log(unitedStates);

export function searchParks() {
  const url = new URL(baseUrl + '/parks');
  url.searchParams.append('limit', 1000)

  return fetch(url, {
    headers: {
      'X-Api-Key': apiKey
    }
  }).then(res => res.json());
}

export function searchParksByActivity() {
  const url = new URL(baseUrl + '/activities/parks');
  url.searchParams.append('limit', 1000);

  return fetch(url, {
    headers: {
      'X-Api-Key': apiKey
    }
  }).then(res => res.json());
}

function States(props) {
  const [results, setResults] = React.useState(0);

  const handleSearch = () => {
    searchParksByActivity().then(res => {
      setResults(res.data);
    });
  };

  const handleClick = event => {
    console.log(event.target.value);
  }

  const resultList = (results || []).map(park =>
    <tr key={park.id}>
      <td>{park.fullName}</td>
      <td>{park.states}</td>
    </tr>
  );

  const statesList = (unitedStates || []).map((state, i) =>
    <button key={i} value={state.name} onClick={handleClick}>{state.abbreviation}</button>
  );

  return (
    <div>
      <div className="search-input">
        <Button
          startIcon={<LoginIcon />}
          color="primary"
          variant="contained"
          onClick={handleSearch}
        >
          Show Parks
        </Button>
      </div>
      <h1 className="h1">States</h1>
      <div>{statesList}</div>
      <div className="parks">
        <table>
          <thead>
            <tr>
              <th className="title-col">Name</th>
              <th className="title-col">State</th>
            </tr>
          </thead>
          <tbody>{resultList}</tbody>
        </table>
      </div>
    </div>
  )
}

export default States;
