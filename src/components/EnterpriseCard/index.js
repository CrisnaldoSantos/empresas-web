/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '80vw',
    height: '70vh',
  },
  image: {
    width: '35vw',
    marginTop: '20px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-beetwen',
    alignItems: 'center',
    padding: '10px 40px',
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: ' 50px;',
  },
  description: {
    marginTop: '50px',
    color: '#8d8c8c',
    fontSize: '1.6rem',
    wordWrap: 'break-word',
  },
});

export default function EnterpriseCard({ img, description, title }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.container}>
        <img src={img} alt={title} className={classes.image} />
        <p className={classes.description}>{description}</p>
      </CardContent>
    </Card>
  );
}
