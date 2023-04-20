import React, { useState, useEffect } from 'react';
import './feed.scss';
import Comment from './Comment/Comment';
import FeedContent from './FeedContent/FeedContent';
import FeedHeader from './FeedHeader/FeedHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

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
  const [page, setPage] = useState(1);
  const [reply, setReply] = useState('');
  const [uniqueKey, setUniqueKey] = useState(1);
  const [comment, setComment] = useState([]);
  const [like, setLike] = useState(false);

  function getReply(e) {
    const comment = e.target.value;
    setReply(comment);
  }

  const toggleLike = () => {
    setLike(prev => !prev);
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

                <div className="my-comment-wrap">
                  <div className="userAccount">
                    {account}
                    <span>&nbsp;</span>
                    <span className="reply">{mockReply}</span>
                    {/* {comment.map(({ id, replyAccount, mockReply }) => {
                        return (
                          <Comment
                            key={id}
                            replyAccount={replyAccount}
                            mockReply={mockReply}
                          />
                        );
                      })} */}
                  </div>
                </div>
              </div>

              <div className="comment-register-wrap">
                <form className="commentForm">
                  <input
                    className="addcomment-input"
                    placeholder="댓글 달기..."
                    // onChange={getReply}
                    // value={mockReply}
                  />
                  <button
                    className={reply.length >= 1 ? 'submitOn' : 'submitOff'}
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
