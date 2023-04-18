import React from 'react';
import './feedUnder.scss';

const FeedUnder = ({ id, userFeedProfile, account }) => {
  return (
    <div className="profile-topwrap">
      <div className="profile-top-left-div" key={id}>
        <img
          alt="프로필 이미지"
          src={userFeedProfile}
          className="profile-pic"
        />
        <a href="#!" className="my-nickname">
          {account}
        </a>
      </div>
    </div>
  );
};

export default FeedUnder;
