import React, { useEffect, useState } from 'react';
import './comment.scss';

const Comment = ({ id, account, removeReply, reply }) => {
  const [like, setLike] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const toggleLike = () => {
    setLike(prev => !prev);
  };

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <>
      <div className="user-comment-wrap">
        <span className="user-name">{account}</span>
        <span className="user-reply">{reply}</span>
        <div className="comment-icon-wrap">
          <i
            className={`fa-heart ${like ? 'fas is-liked' : 'far'}`}
            onClick={toggleLike}
          />
          <i class="fa-solid fa-trash-can" onClick={() => removeReply(id)}></i>
        </div>
      </div>
    </>
  );
};

export default Comment;
