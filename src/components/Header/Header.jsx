import React from 'react';
import FilterHdr from '@material-ui/icons/FilterHdr';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    height: 10
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" href="/">
          <FilterHdr />
        </IconButton>
        <Typography className={classes.title} variant="h6" noWrap>
          National Park Explorer
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
