import './stateParks.scss';
import React from 'react';
import _ from 'lodash';
import { ApiHelper } from '../../api/ApiHelper.js';
import Header from '../../components/Header/Header';
import ParkCard from '../../components/ParkCard/ParkCard';
import {
  Container,
  Grid,
  Typography,
  CircularProgress
} from '@material-ui/core';

// Declaring the info we need to build our API query url
const apiKey = process.env.REACT_APP_NPS_API_KEY;
const baseUrl = 'https://developer.nps.gov/api/v1/parks';

const StateParks = (props) => {
  // Grab the state's full name and abbreviation code from the url params
  // This is available to us through the props.match object
  const stateName = props.match.params.stateName;
  const stateAbbr = props.match.params.stateAbbr;

  // Build the API query url and append the state abbreviation as the query param
  const url = new URL(baseUrl);
  url.searchParams.append('stateCode', stateAbbr);

  // Execute our ApiHelper function to make the request
  const { data, isLoading, hasError } = ApiHelper(url, [], apiKey);

  // Loop through the list of parks and return the ParkCard component for each
  const parksList = (data.data || []).map((park, i) => <ParkCard key={i} park={park} />);
  const parkTotal = data.total || '';

  return (
    <>
      <Header />

      <div className="state-parks__container">
        <Container>
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h5"
            align="center"
          >
            <div className="state-parks__heading">
              {`${!_.isEmpty(stateAbbr) ? stateName : 'United States'} National Parks`}

              {!isLoading &&
                <div className="state-parks__total">
                  {`Total: ${parkTotal}`}
                </div>
              }

              <div className="state-parks__loading-error">
                {isLoading &&
                  <CircularProgress />
                }

                {hasError &&
                  <div>Something went wrong. Please try refreshing your browser.</div>
                }
              </div>
            </div>
          </Typography>
          <Grid
            container
            spacing={3}
            alignItems="stretch"
          >
            {!isLoading &&
              parksList
            }
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default StateParks;
