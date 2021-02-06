import React from 'react';
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 375
  },
  media: {
    height: 200,
  },
});

function ParkCard(props) {
  const classes = useStyles();

  return (
    <Grid container item xs={12} sm={4} key={props.park?.id} alignItems="stretch">
      <Card className={classes.root}>
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
