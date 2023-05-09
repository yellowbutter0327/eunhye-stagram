import React, { useEffect, useState } from 'react';
import './Feed.scss';
import Comment from './Comment/Comment';
import FeedContent from './FeedContent/FeedContent';
import FeedHeader from './FeedHeader/FeedHeader';

const Feed = ({
  id,
  account,
  userFeedProfile,
  feedImgsrc,
  feedText,
  likeHit,
  replyAccount,
  mockReply,
}) => {
  const [comment, setComment] = useState([]);
  const [reply, setReply] = useState('');
  const [uniqueKey, setUniqueKey] = useState(1);
  const [like, setLike] = useState(false);
  const [replyLike, setReplyLike] = useState(false);

  function getReply(e) {
    const comment = e.target.value;
    setReply(comment);
  }

  const toggleLike = () => {
    setLike(prev => !prev);
  };

  const replyToggleLike = () => {
    setReplyLike(prev => !prev);
  };

  function submitComment(e) {
    e.preventDefault();
    if (reply.length === 0) return;
    setComment([...comment, { id: uniqueKey, account: 'hyehye', reply }]);
    setUniqueKey(prev => prev + 1);
    setReply('');
  }

  const removeReply = uniqueKey => {
    setComment(
      comment.filter(cmt => {
        return cmt.id !== uniqueKey;
      })
    );
  };

  return (
    <>
      <div className="feed-wrap" key={id} onDoubleClick={toggleLike}>
        <div className="profile-wrap">
          <FeedHeader
            key={id}
            userFeedProfile={userFeedProfile}
            account={account}
          />
          <FeedContent feedImgsrc={feedImgsrc} />

          <div className="feed-under-wrap">
            <div className="under-button-wrap">
              <div className="comment-div">
                <div className="people-like-div">
                  <i
                    className={`fa-heart ${like ? 'fas is-liked' : 'far'}`}
                    onClick={toggleLike}
                  />

                  <span className="people-like-span">
                    좋아요 {like ? likeHit + 1 : likeHit}개
                  </span>
                </div>

                <div className="my-comment-wrap">
                  <span className="account">{account}</span>
                  <span>{feedText}</span>
                </div>

                <div className="pre-comment-wrap">
                  <span className="pre-account-name"> {replyAccount}</span>
                  <span className="pre-reply">{mockReply}</span>

                  <div className="pre-icon-wrap">
                    <i
                      className={`fa-heart ${
                        replyLike ? 'fas is-liked' : 'far'
                      }`}
                      onClick={replyToggleLike}
                    />
                  </div>
                </div>
                {comment.map(({ id, account, reply }) => {
                  return (
                    <Comment
                      id={id}
                      key={id}
                      account={account}
                      reply={reply}
                      removeReply={removeReply}
                    />
                  );
                })}
              </div>

              <div className="comment-register-wrap">
                <form className="comment-form" onSubmit={submitComment}>
                  <input
                    className="addcomment-input"
                    placeholder="댓글 달기..."
                    onChange={getReply}
                    value={reply}
                  />

                  <button
                    className={reply.length >= 1 ? 'submit-on' : 'submit-off'}
                  >
                    게시
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
