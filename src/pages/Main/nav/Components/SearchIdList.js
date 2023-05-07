import React from 'react';
import './SearchIdList.scss';

function SearchIdList({ searchIds }) {
  return (
    <a className="search-id-container" href="#!">
      {searchIds.map(({ id, account, userFeedProfile }) => (
        <li class="search-id-list" key={id}>
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
