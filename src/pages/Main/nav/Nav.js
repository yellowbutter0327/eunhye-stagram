import React from 'react';
import './nav.scss';

const Nav = () => {
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

        <input type="search" placeholder="검색" className="nav-text-input" />

        <div className="icon-wrap">
          {MENU_ICONS.map(icons => {
            return (
              <a href={icons.href}>
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
  { id: 1, src: './images/explore.png', alt: '서치 로고' },
  { id: 2, src: './images/heart-icon.png', alt: '하트 로고 ' },
  { id: 3, src: './images/mypage.png', alt: '마이페이지 로고' },
];
