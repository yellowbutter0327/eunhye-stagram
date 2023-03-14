import React, { useState } from 'react';
import './feed.scss';

const Feed = ()=>{
    return(
        <div className="left-wrap">
        <div className="feed-wrap">
          <div className="profile-wrap">
            <div className="profile-topwrap">
              <div className="profile-top-left-div">
                <img
                  alt="프로필 이미지"
                  src="./images/my-feed.jpeg"
                  className="profile-pic"
                />
                <a href="#" className="my-nickname">
                  eunhye_20s
                </a>
              </div>
              <button className="profile-button">
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
            <img
              alt="피드 이미지"
              src="./images/feed-image1.JPG"
              className="feed-image"
            />
            <div className="feed-under-wrap">
              <div className="under-button-wrap">
                <button type="button" className="under-button">
                  <img
                    alt="heart-img"
                    src="./images/heart.png"
                    className="comment-button"
                  />
                </button>
                <button type="button" className="under-button">
                  <img
                    alt="text-img"
                    src="./images/comment.png"
                    className="comment-button"
                  />
                </button>
                <button type="button" className="under-button">
                  <img
                    alt="share-img"
                    src="./images/share.png"
                    className="comment-button"
                  />
                </button>
              </div>

              <div className="comment-div">
                <div className="people-like-div">
                  <span className="people-like-span">
                    <strong>dlwlrma</strong>님<strong>외 10명이</strong>{' '}
                    좋아합니다.
                  </span>
                </div>

                <div className="my-comment-wrap">
                  <strong className="my-nickname">eunhye_20s</strong>
                  <span className="my-comment">러버덕 봤어요</span>
                </div>

                <ul className="user-comment">
                  <li>
                    <strong>lamb_queen</strong>
                    <span>우와 귀여워요</span>
                  </li>
                </ul>
                <span className="minute-span">42분 전</span>
              </div>

              <div className="comment-register-wrap">
                <input
                  type="text"
                  placeholder="댓글 달기"
                  className="addcomment-input"
                />

                <button className="upload-button">게시</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Feed;

const ICONS = [
    { id: 1, className: "fa-regular fa-heart" },
    { id: 2, className: "fa-regular fa-comment" },
    { id: 3, className: "fa-regular fa-paper-plane" },
    { id: 4, className: "fa-regular fa-bookmark" },
  ];