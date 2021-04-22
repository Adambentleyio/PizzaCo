import { useState, useEffect } from 'react';

const gql = String.raw;

export default function useLatestData() {
  // hot slices

  // create state to hold the data from Sanity API query
  const [hotSlices, setHotSlices] = useState();
  const [slicemasters, setSlicemasters] = useState();

  useEffect(function () {
    // hen the component loads, fetch the data
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
          query {
            StoreSettings(id: "downtown") {
              name
              Slicemaster {
                name
              }
              hotSlices {
                name
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // TODO Check for errors
        // set the data to state
        setHotSlices(res.data.StoreSettings.hotSlices);
        setSlicemasters(res.data.StoreSettings.Slicemaster);
      });
  }, []);
  return {
    hotSlices,
    slicemasters,
  };
}
