import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../components/ModalLoading/index';

import Routes from '../routes';

function Global() {
  const loading = useSelector((state) => state.load.loading);
  return (
    <>
      <Loading load={loading} />
      <Routes />
    </>
  );
}

export default Global;
