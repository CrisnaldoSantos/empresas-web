import React from 'react';
import { useSelector } from 'react-redux';
import SearchBar from '../../components/SearchBar';

function Search() {
  const search = useSelector((state) => state.searchbar.searchTerm);

  return (
    <>
      <SearchBar />
      {search === '' && <p>Clique na busca para iniciar.</p>}
    </>
  );
}

export default Search;
