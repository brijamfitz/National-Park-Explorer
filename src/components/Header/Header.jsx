import './header.scss';
import React from 'react';
import FilterHdr from '@material-ui/icons/FilterHdr';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography
} from '@material-ui/core';

function Header() {
  return (
    <div className="header__wrap">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" href="/">
            <FilterHdr />
          </IconButton>
          <Typography className="header__title" variant="h6" noWrap>
            National Park Explorer
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;
