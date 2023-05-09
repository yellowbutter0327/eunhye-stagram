import React from 'react';
import { Link } from 'react-router-dom';
import './FeedHeader.scss';

const FeedHeader = ({ id, userFeedProfile, account }) => {
  return (
    <div className="profile-topwrap">
      <div className="profile-top-left-div" key={id}>
        <img
          alt="프로필 이미지"
          src={userFeedProfile}
          className="profile-pic"
        />
        <Link to="#" className="my-nickname">
          {account}
        </Link>
      </div>
    </div>
  );
};

export default FeedHeader;
