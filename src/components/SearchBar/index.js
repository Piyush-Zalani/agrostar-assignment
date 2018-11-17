import React from 'react';
import { SearchBar } from './style';

export default ({ onSearchChange }) => {
  return (
    <SearchBar>
      <span className="fa fa-search" />
      <input placeholder="Search" onChange={onSearchChange} />
    </SearchBar>
  )
}
