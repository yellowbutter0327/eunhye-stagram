import React, { useEffect, useState } from 'react';
import Nav from './Nav/Nav';
import Story from './Story/Story';
import Feed from './Feeds/Feed';
import AccountAndRecommend from 'pages/AccountAndRecommend/AccountAndRecommend.js';
import './Main.scss';

const Main = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [feedList, setFeedList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('data/feed/sample.json')
      .then(response => response.json())
      .then(data => setFeedList(data));
    setIsLoading(false);
  }, []);

  //로딩페이지 렌더링 전 표시
  if (isLoading) return <p>loading...</p>;

  const toggledarkmode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'main-container dark-mode' : 'main-container'}>
      <Nav toggledarkmode={toggledarkmode} />
      <Story className="story" toggledarkmode={toggledarkmode} />
      <main>
        <section className="global-container">
          <div className="left-wrap" toggledarkmode={toggledarkmode}>
            {feedList.map(
              ({
                id,
                account,
                userFeedProfile,
                feedImgsrc,
                feedText,
                likeHit,
                replyAccount,
                mockReply,
              }) => {
                return (
                  <Feed
                    key={id}
                    account={account}
                    feedImgsrc={feedImgsrc}
                    userFeedProfile={userFeedProfile}
                    feedText={feedText}
                    likeHit={likeHit}
                    replyAccount={replyAccount}
                    mockReply={mockReply}
                    toggledarkmode={darkMode}
                  />
                );
              }
            )}
          </div>
          <AccountAndRecommend />
        </section>
      </main>
    </div>
  );
};

export default Main;
