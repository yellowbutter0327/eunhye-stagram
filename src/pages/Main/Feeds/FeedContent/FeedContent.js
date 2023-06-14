import React from 'react';
import './FeedContent.scss';

const FeedContent = ({ feedImgsrc }) => {
  return (
    <div className="feed-image-wrap">
      <img src={feedImgsrc} className="feed-image" alt="피드 이미지"></img>
    </div>
  );
};

export default FeedContent;
