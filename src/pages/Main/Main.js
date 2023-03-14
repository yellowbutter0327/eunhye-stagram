import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './main.scss';
import Nav from './nav/Nav';
import Story from './story/Story';

const Main = () => {
  return (
    <div>
      <div className="all-wrap">
        <Nav></Nav>
        <Story></Story>
        <div className="middle-wrap">
          {/* <div className="left-wrap">
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
          </div> */}

          <div className="right-wrap">
            <div className="my-profile-tap">
              <img
                className="main-profile-img"
                src="../images/black-heart-profile.jpeg"
                alt="인스타그램 프로필 이미지"
              />
              <div className="profile-description-wrap">
                <a href="#" className="main-profile-name">
                  {' '}
                  eunhye_20s{' '}
                </a>
                <span className="profile-description">은혜의 공간</span>
              </div>
            </div>

            <div className="story-wrap">
              <div className="story-top-wrap">
                <span className="story-title">스토리</span>
                <a href="#" className="story-show-all">
                  모두 보기
                </a>
              </div>
              <div className="instagram-story">
                <div className="story-description-wrap">
                  <img
                    src="../images/insta-story-img.png"
                    alt="스토리 이미지1"
                    className="story-img"
                  />
                  <div>
                    <a href="#" className="user-nickname">
                      _yum_s
                    </a>
                    <span className="story-time">16분 전</span>
                  </div>
                </div>
                <div className="story-description-wrap">
                  <img
                    src="../images/insta-story-img.png"
                    alt="스토리 이미지2"
                    className="story-img"
                  />
                  <div>
                    <a href="#" className="user-nickname">
                      drink_eat_drink
                    </a>
                    <span className="story-time">3시간 전</span>
                  </div>
                </div>
                <div className="story-description-wrap">
                  <img
                    src="../images/insta-story-img.png"
                    alt="스토리 이미지3"
                    className="story-img"
                  />
                  <div>
                    <a href="#" className="user-nickname">
                      hyukyc
                    </a>
                    <span className="story-time">20시간 전</span>
                  </div>
                </div>
                <div className="story-description-wrap">
                  <img
                    src="../images/insta-story-img.png"
                    alt="스토리 이미지4"
                    className="story-img"
                  />
                  <div>
                    <a href="#" className="user-nickname">
                      jminkeek
                    </a>
                    <span className="story-time">10시간 전</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="recommend-wrap">
              <div className="reco-top-wrap">
                <span className="reco-title">회원님을 위한 추천</span>
                <a href="#" className="reco-show-all">
                  모두 보기
                </a>
              </div>
              <div className="recommend-people">
                <div className="reco-person-wrap">
                  <img
                    src="../images/insta-story-img.png"
                    alt="추천인 1"
                    className="recommend-img"
                  />
                  <div className="follow-description-wrap">
                    <div>
                      <a href="#" className="user-nickname">
                        _yum_s
                      </a>
                      <span className="follow-reco-description">
                        eunhye_00님 외 2명이 팔로우합니다.{' '}
                      </span>
                    </div>
                    <button className="follow-button">팔로우</button>
                  </div>
                </div>
                <div className="reco-person-wrap">
                  <img
                    src="../images/insta-story-img.png"
                    alt="추천인 1"
                    className="recommend-img"
                  />
                  <div className="follow-description-wrap">
                    <div>
                      <a href="#" className="user-nickname">
                        _yum_s
                      </a>
                      <span className="follow-reco-description">
                        eunhye_00님 외 2명이 팔로우합니다.{' '}
                      </span>
                    </div>
                    <button className="follow-button">팔로우</button>
                  </div>
                </div>
                <div className="reco-person-wrap">
                  <img
                    src="../images/insta-story-img.png"
                    alt="추천인 1"
                    className="recommend-img"
                  />
                  <div className="follow-description-wrap">
                    <div>
                      <a href="#" className="user-nickname">
                        _yum_s
                      </a>
                      <span className="follow-reco-description">
                        eunhye_00님 외 2명이 팔로우합니다.{' '}
                      </span>
                    </div>
                    <button className="follow-button">팔로우</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
