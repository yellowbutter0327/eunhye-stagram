import React from 'react';
import Profile from './Profile/Profile';
import './Story.scss';

const Story = () => {
  return (
    <div className="story">
      <div className="story-container">
        <ul className="story-wrap">
          <Profile />
        </ul>
      </div>
    </div>
  );
};

export default Story;
