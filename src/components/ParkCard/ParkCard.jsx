import './parkCard.scss';
import React from 'react';
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core';

// This component simply renders out the data passed down through props from parent
const ParkCard = (props) => {
  return (
    <Grid container item xs={12} sm={4} key={props.park?.id} alignItems="stretch">
      <Card className="park-card__container">
        <CardMedia
          className="park-card__media"
          component="img"
          image={props.park?.images[0]?.url}
          title={props.park?.fullName}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {props.park?.fullName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.park?.description}
          </Typography>
        </CardContent>
        <CardActions className="park-card__actions-btn">
          <Button size="small" color="primary" href={props.park?.url} target="_blank">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default ParkCard;
