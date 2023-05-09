import React, { useState, useEffect } from 'react';
import './AccountAndRecommend.scss';

const AccountAndRecommend = () => {
  const [recommendList, setRecommendList] = useState([]);
  const [clicked, setClicked] = useState({});

  const handleClick = buttonId => {
    setClicked(prevState => ({
      ...prevState,
      [buttonId]: !prevState[buttonId],
    }));
  };

  useEffect(() => {
    fetch('data/accountAndRecommend/sample.json')
      .then(response => response.json())
      .then(data => setRecommendList(data));
  }, []);

  return (
    <div className="right-wrap">
      <div className="account-and-recommend-container">
        <div className="my-profile-tap">
          <img
            className="main-profile-img"
            src="../images/story-image1.jpg"
            alt="인스타그램 프로필 이미지"
          />
          <div className="profile-description-wrap">
            <a href="#!" className="main-profile-name">
              {' '}
              hyehye{' '}
            </a>
            <span className="profile-description">혜의 공간</span>
          </div>
        </div>

        <div className="recommend-wrap">
          <div className="reco-top-wrap">
            <p className="reco-title">회원님을 위한 추천</p>
            <a href="#!" className="reco-show-all">
              모두 보기
            </a>
          </div>
          <div className="recommend-people">
            {recommendList.map(
              ({ id, recommendAccount, num, whosFollow, imgsrc }) => {
                const isClicked = clicked[id];
                return (
                  <div className="reco-person-wrap" key={id}>
                    <img className="recommend-img" alt="profile" src={imgsrc} />
                    <div className="follow-description-wrap">
                      <div>
                        <a href="#!" className="user-nickname">
                          {recommendAccount}
                        </a>
                        <span className="follow-reco-description">{`${whosFollow}님 외 ${num}명이 팔로우 합니다`}</span>
                      </div>
                      <button
                        className={isClicked ? 'clicked' : 'unclicked'}
                        onClick={() => handleClick(id)}
                      >
                        {isClicked ? 'unfollow' : 'follow'}
                      </button>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>

      <div className="siteMapWrapper">
        <ul className="siteMapList">
          {SITE_INFO.map(infoList => {
            return (
              <li key={infoList.id}>
                <a className={infoList.className} href={infoList.href}>
                  {infoList.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AccountAndRecommend;

const SITE_INFO = [
  {
    id: 1,
    href: 'localhost:3000/mai',
    title: '소개',
    className: 'siteInfoLink',
  },
  {
    id: 2,
    href: 'localhost:3000/mai',
    title: '도움말',
    className: 'siteInfoLink',
  },
  {
    id: 3,
    href: 'localhost:3000/mai',
    title: '홍보센터',
    className: 'siteInfoLink',
  },
  {
    id: 4,
    href: 'localhost:3000/mai',
    title: 'API',
    className: 'siteInfoLink',
  },
  {
    id: 5,
    href: 'localhost:3000/mai',
    title: '채용',
    className: 'siteInfoLink',
  },
  {
    id: 6,
    href: 'localhost:3000/mai',
    title: '정보',
    className: 'siteInfoLink',
  },
  {
    id: 7,
    href: 'localhost:3000/mai',
    title: '개인정보처리방침',
    className: 'siteInfoLink',
  },
  {
    id: 8,
    href: 'localhost:3000/mai',
    title: '약관',
    className: 'siteInfoLink',
  },
  {
    id: 9,
    href: 'localhost:3000/mai',
    title: '위치',
    className: 'siteInfoLink',
  },
  {
    id: 10,
    href: 'localhost:3000/mai',
    title: '언어',
    className: 'siteInfoLink lastElement',
  },
];
