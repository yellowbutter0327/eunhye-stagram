import React from 'react';
import './feedContent.scss';

const FeedContent = ({ feedImgsrc }) => {
  return (
    <div className="feed-image-wrap">
      <img src={feedImgsrc} className="feed-image"></img>
    </div>
  );
};

export default FeedContent;
