import React from 'react';
import './SearchBox.scss';

function SearchBox({ handleInput }) {
  return (
    <div className="search-wrap">
      <input
        type="search"
        className="nav-text-input"
        placeholder="검색"
        onChange={handleInput}
      />
      <img src="/images/search-icon.png" className="search-icon" />
    </div>
  );
}

export default SearchBox;
