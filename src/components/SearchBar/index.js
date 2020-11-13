import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  InputAdornment,
  Input,
} from '@material-ui/core';
import { Search, Close } from '@material-ui/icons';
import LogoNav from '../../assets/logo-nav.png';

const useStyles = makeStyles({
  bar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    minWidth: '80vw',
    display: 'flex',
    justifyContent: 'center',
  },
  navlogo: {
    height: '5vh',
  },
  inputSearch: {
    width: '80vw',
    color: '#FFF',
    fontSize: '1.6rem',
  },
});

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [searchPreesed, setSearchPreesed] = useState(false);

  return (
    <div>
      {searchPreesed ? (
        <AppBar position="fixed" className={classes.bar}>
          <Toolbar>
            <Input
              className={classes.inputSearch}
              placeholder="Pesquisar"
              color="neutral"
              startAdornment={
                <InputAdornment position="start">
                  <Search color="inherit" fontSize="large" />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    color="inherit"
                    onClick={() => setSearchPreesed(false)}
                    edge="end"
                  >
                    <Close />
                  </IconButton>
                </InputAdornment>
              }
            />
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar position="fixed" className={classes.bar}>
          <Toolbar>
            <div className={classes.logoContainer}>
              <img src={LogoNav} alt="logo" className={classes.navlogo} />
            </div>
            <IconButton
              aria-label="search"
              color="inherit"
              onClick={() => setSearchPreesed(true)}
            >
              <Search fontSize="large" />
            </IconButton>
          </Toolbar>
        </AppBar>
      )}
    </div>
  );
}
