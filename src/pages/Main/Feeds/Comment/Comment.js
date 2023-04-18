import React from 'react';
import './comment.scss';

const Comment = ({ id, replyAccount, mockReply }) => {
  return (
    <div className="user-comment" key={id}>
      <div className="user-account">
        <span className="user-name">{replyAccount}</span>
        {mockReply}
      </div>
    </div>
  );
};

export default Comment;
