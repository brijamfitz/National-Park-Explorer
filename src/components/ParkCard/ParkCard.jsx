import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 200,
  },
});

function ParkCard(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={4} key={props.park?.id}>
      <Card>
        <CardMedia
          className={classes.media}
          image={props.park?.images[0]?.url}
          title={props.park?.fullName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.park?.fullName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.park?.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" href={props.park?.url} target="_blank">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default ParkCard;
