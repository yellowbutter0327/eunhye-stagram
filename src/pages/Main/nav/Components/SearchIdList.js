import React from 'react';
import './SearchIdList.scss';

function SearchIdList({ searchIds }) {
  const containerClass =
    searchIds.length === 0
      ? 'search-id-container hidden'
      : 'search-id-container';

  return (
    <a className={containerClass} href="#!">
      {searchIds.map(({ id, account, userFeedProfile }) => (
        <li className="search-id-list" key={id}>
          <img
            src={userFeedProfile}
            all="유저 이미지"
            className="search-user-img"
          />
          <span className="search-id">{account}</span>
        </li>
      ))}
    </a>
  );
}

export default SearchIdList;
