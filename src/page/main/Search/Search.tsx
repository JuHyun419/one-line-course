import React from 'react'
import SearchBar from './Search-elements/SearchBar';

import "./_Search.scss";

const Search: React.FC<{}> = () => {
  return (
    <div className="search">
      <SearchBar />
    </div>
  )
};

export default Search;
