/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
// import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
  },
  paper: {
    background: 'transparent',
  },
});

export default function TransitionsModal({ load }) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        disableEnforceFocus
        disableAutoFocus
        className={classes.modal}
        open={load}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <CircularProgress style={{ color: '#FFF' }} />
      </Modal>
    </div>
  );
}
