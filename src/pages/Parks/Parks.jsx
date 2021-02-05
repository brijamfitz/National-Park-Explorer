import React from 'react';

const apiKey = 'ZqdIVtlZs4bosOOaT3eGUua5NxPiKhPk3VBaGC53';
const baseUrl = 'https://developer.nps.gov/api/v1/parks';

export function searchParks() {
  const url = new URL(baseUrl);
  url.searchParams.append('limit', '468')
  url.searchParams.append('api_key', apiKey)

  return fetch(url).then(response => response.json());
}

function Parks(props) {
  const [results, setResults] = React.useState(0);

  const handleSearch = (event) => {
    searchParks().then(response => {
      setResults(response.data);
    });
  };

  const resultList = (results || []).map((park) =>
    <tr key={park.id}>
      <td>{park.fullName}</td>
    </tr>
  );

  return (
    <div>
      <div className="search-input">
        <button onClick={handleSearch}>Show Parks</button>
      </div>
      <h1 className="h1">Search Results</h1>
      <div className="parks">
        <table>
          <thead>
            <tr>
              <th className="title-col">Name</th>
            </tr>
          </thead>
          <tbody>{resultList}</tbody>
        </table>
      </div>
    </div>
  )
}

export default Parks;
