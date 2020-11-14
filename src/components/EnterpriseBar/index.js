/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

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
    padding: '0px 15vw 0px 0px',
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

export default function PrimarySearchAppBar({ name }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <AppBar position="fixed" className={classes.bar}>
        <Toolbar>
          <IconButton
            aria-label="search"
            color="inherit"
            onClick={() => history.push('/')}
          >
            <ArrowBack fontSize="large" />
          </IconButton>
          <div className={classes.logoContainer}>{name}</div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
