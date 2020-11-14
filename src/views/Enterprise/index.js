import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { showEnterprise } from '../../store/fetchActions';
import EnterpriseBar from '../../components/EnterpriseBar';
import EnterpriseCard from '../../components/EnterpriseCard';

function Enterprise() {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const idEnterprise = match.params.id;
  const enterprise = useSelector((state) => state.enterprise.enterprise);

  async function handleGetEnterprise(id) {
    dispatch(showEnterprise(id));
  }

  useEffect(() => {
    handleGetEnterprise(idEnterprise);
  }, []);

  return (
    <>
      {enterprise !== undefined && (
        <>
          <EnterpriseBar name={enterprise.enterprise_name} />
          <EnterpriseCard
            img={`${process.env.REACT_APP_BASE_URL}${enterprise.photo}`}
            description={enterprise.description}
            title={enterprise.enterprise_name}
          />
        </>
      )}
    </>
  );
}

export default Enterprise;
