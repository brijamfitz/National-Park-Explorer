import { useEffect, useState } from "react";

// Custom hook that handles fetching data from an API
// It takes in three arguments
export const ApiHelper = (initialUrl, initialData, apiKey) => {
  // Initialize state objects that we will eventually return
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [fetchedData, setFetchedData] = useState(initialData);

  useEffect(() => {
    // On initial mount, set the unmounted flag to false
    let unmounted = false;

    const handleFetchResponse = (response) => {
      // If the component has already mounted, use the data that is already there
      if (unmounted) return initialData;

      // Set our state based on the response
      setHasError(!response.ok);
      setIsLoading(false);

      // If a response is there, do the json method it
      // Otherwise, return the data that is already there
      return response.ok && response.json ? response.json() : initialData;
    };

    const fetchData = () => {
      // Set our loading state to true
      setIsLoading(true);

      // Make the request and use our above function in each block
      return (
        fetch(url, { headers: { 'X-Api-Key': apiKey }})
        .then(handleFetchResponse)
        .catch(handleFetchResponse)
      )
    };

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
