import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './nav.scss';

const Nav = ({ toggledarkmode }) => {
  const [showCategory, setShowCategory] = useState(false);
  return (
    <nav className="nav-bar">
      <div className="nav-wrap">
        <div className="logo-wrap">
          <img
            alt="위스타그램 그림 로고"
            src="./images/instagram-piclogo.png"
            className="logo-pic-img"
          />
          <a href="/main" className="logo-text">
            hyestagram
          </a>
        </div>

        <div className="searchWrap">
          <input type="search" placeholder="검색" className="nav-text-input" />
          <img src="/images/search-icon.png" className="searchIcon" />
        </div>

        <div className="icon-wrap">
          {MENU_ICONS.map(icons => {
            if (icons.id === 0) {
              return (
                <button
                  key={icons.id}
                  className={icons.className}
                  onClick={toggledarkmode}
                >
                  <img className="menuIcon" src={icons.src} alt={icons.alt} />
                </button>
              );
            }
            if (icons.id === 3) {
              return (
                <div
                  key={icons.id}
                  onClick={() => setShowCategory(!showCategory)}
                  className="test"
                >
                  <img className="menuIcon" src={icons.src} alt={icons.alt} />
                  {showCategory && (
                    <ul className="category">
                      <li>
                        <a href="#!">설정</a>
                      </li>
                      <li>
                        <a href="#!">내 활동</a>
                      </li>
                      <li>
                        <a href="#!">마이페이지</a>
                      </li>
                      <li>
                        {' '}
                        <a href="#!">로그아웃</a>
                      </li>
                    </ul>
                  )}
                </div>
              );
            }
            return (
              <a href={icons.href} key={icons.key}>
                <img
                  className="menuIcon"
                  key={icons.key}
                  src={icons.src}
                  alt={icons.alt}
                />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Nav;

const MENU_ICONS = [
  {
    id: 0,
    key: 'dark-mode',
    src: './images/dark-mode.png',
    alt: '모드변경 로고',
  },
  { id: 1, key: 'explore', src: './images/explore.png', alt: '서치 로고' },
  { id: 2, key: 'heart', src: './images/heart-icon.png', alt: '하트 로고 ' },
  {
    id: 3,
    key: 'mypage',
    src: './images/mypage.png',
    alt: '마이페이지 로고',
    className: 'test',
  },
];
