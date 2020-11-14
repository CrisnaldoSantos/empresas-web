/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '80vw',
  },
  image: {
    width: '25vw',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-beetwen',
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: ' 50px;',
  },
  name: {
    color: '#1a0e49',
    fontSize: '1.6rem',
    wordWrap: 'break-word',
  },
  type: {
    color: '#8d8c8c',
    fontSize: '1.4rem',
    wordWrap: 'break-word',
  },
  location: {
    color: '#8d8c8c',
    fontSize: '1rem',
    wordWrap: 'break-word',
  },
});

export default function SimpleCard({ id, img, title, type, city, country }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card
      style={{ cursor: 'pointer' }}
      className={classes.root}
      onClick={() => history.push(`/enterprise/${id}`)}
    >
      <CardContent className={classes.container}>
        <img src={img} alt={title} className={classes.image} />
        <div className={classes.detailsContainer}>
          <h1 className={classes.name}>{title}</h1>
          <h3 className={classes.type}>{type}</h3>
          <span className={classes.location}>{`${city} - ${country}`}</span>
        </div>
      </CardContent>
    </Card>
  );
}
