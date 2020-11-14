/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';
import { NotFoundMsg, CardsContainer } from '../../styles/Home/home';
import SearchCard from '../../components/SearchCard';
import SearchBar from '../../components/SearchBar';

function Search() {
  const search = useSelector((state) => state.searchbar.searchTerm);
  const enterprises = useSelector((state) => state.enterprises.enterprises);

  return (
    <>
      <SearchBar />
      {search === '' && <p>Clique na busca para iniciar.</p>}
      {enterprises !== undefined &&
        enterprises.length === 0 &&
        search !== '' && (
          <NotFoundMsg>
            Nenhuma empresa foi encontrada para a busca realizada.
          </NotFoundMsg>
        )}

      {enterprises !== undefined && enterprises.length !== 0 && (
        <CardsContainer style={{ padding: '0px 0px' }}>
          {enterprises.map((enterprise) => {
            return (
              <SearchCard
                key={enterprise.id}
                id={enterprise.id}
                img={`${process.env.REACT_APP_BASE_URL}${enterprise.photo}`}
                title={enterprise.enterprise_name}
                type={enterprise.enterprise_type.enterprise_type_name}
                city={enterprise.city}
                country={enterprise.country}
              />
            );
          })}
        </CardsContainer>
      )}
    </>
  );
}

export default Search;
