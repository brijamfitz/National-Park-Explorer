import { useEffect, useState } from 'react';

// Custom hook that handles fetching data from an API
// It takes in three arguments
export function ApiHelper(initialUrl, initialData, apiKey) {
  // Initialize state objects that we will eventually return
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [fetchedData, setFetchedData] = useState(initialData);

  useEffect(() => {
    // Initially set an unmounted flag to false
    let unmounted = false;

    const handleFetchResponse = (response) => {
      // Once our data has been fetched, we set the unmounted flag to true
      // This means our data is already there and we can just return it
      if (unmounted) return initialData;

      // This will flip our error states accordingly
      setHasError(!response.ok);
      // Data has been fetched, so we can set this to false
      setIsLoading(false);

      // If ok is true and the json is there, execute the json method on the response per the fetch spec
      // Otherwise, return the data that is already there
      return response.ok && response.json ? response.json() : initialData;
    };

    const fetchData = () => {
      // Set our loading state to true while data is being fetched
      setIsLoading(true);

      // Makes the actual API request and passes in the above function for each block
      return (
        fetch(url, { headers: { 'X-Api-Key': apiKey }})
        .then(handleFetchResponse)
        .catch(handleFetchResponse)
      )
    };

    // This condition will execute when the component mounts
    // The url will be passed in and the unmounted flag will have been set to false
    // We call our fetchData function which executes the API request and sets our data
    if (initialUrl && !unmounted) {
      fetchData().then(data => !unmounted && setFetchedData(data));
    }

    return () => {
      unmounted = true;
    };
  }, [url]);

  return { isLoading, hasError, setUrl, data: fetchedData };
};

export default ApiHelper;
