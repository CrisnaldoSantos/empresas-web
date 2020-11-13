/* eslint-disable no-console */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  AppBar,
  Toolbar,
  IconButton,
  InputAdornment,
  Input,
} from '@material-ui/core';
import { Search, Close } from '@material-ui/icons';
import { setSearch, resetSearch } from '../../store/ducks/searchbar/index';
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
  const dispatch = useDispatch();

  const [searchPreesed, setSearchPreesed] = useState(false);
  const search = useSelector((state) => state.searchbar.searchTerm);

  function debounceUpdateAndSearch(e, value) {
    dispatch(setSearch({ searchTerm: value }));
    console.log(search);
  }

  function handleCloseSearch(e) {
    e.preventDefault();
    setSearchPreesed(false);
    dispatch(resetSearch());
  }

  return (
    <div>
      {searchPreesed ? (
        <AppBar position="fixed" className={classes.bar}>
          <Toolbar>
            <Input
              onChange={(e) => debounceUpdateAndSearch(e, e.target.value)}
              className={classes.inputSearch}
              placeholder="Pesquisar"
              color="neutral"
              value={search}
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
                    onClick={(e) => handleCloseSearch(e)}
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
