import React, { useEffect, useState } from 'react';
import Nav from './nav/Nav';
import Story from './story/Story';
import Feed from './Feeds/Feed';
import AccountAndRecommend from 'pages/AccountAndRecommend/AccountAndRecommend.js';
import './main.scss';

const Main = () => {
  const [DarkMode, setDarkMode] = useState(false);
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
    setDarkMode(!DarkMode);
  };

  return (
    <div className={DarkMode ? 'main-container dark-mode' : 'main-container'}>
      <Nav toggledarkmode={toggledarkmode} />
      <Story className="story" toggledarkmode={toggledarkmode} />
      <main>
        <section className="globalContainer">
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
                    toggledarkmode={DarkMode}
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
