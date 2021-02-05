import React from 'react';

const apiKey = process.env.REACT_APP_NPS_API_KEY;
const baseUrl = 'https://developer.nps.gov/api/v1/parks';

export function searchParks() {
  const url = new URL(baseUrl);
  url.searchParams.append('limit', '468')
  url.searchParams.append('api_key', apiKey)

  return fetch(url).then(res => res.json());
}

function Parks(props) {
  const [results, setResults] = React.useState(0);

  const handleSearch = () => {
    searchParks().then(res => {
      setResults(res.data);
    });
  };

  const resultList = (results || []).map((park) =>
    <tr key={park.id}>
      <td>{park.fullName}</td>
      <td>{park.states}</td>
    </tr>
  );

  return (
    <div>
      <div className="search-input">
        <button onClick={handleSearch}>Show Parks</button>
      </div>
      <h1 className="h1">Parks</h1>
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

export default Parks;
