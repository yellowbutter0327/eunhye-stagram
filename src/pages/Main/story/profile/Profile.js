import React, { useState } from 'react';
import './profile.scss';

const Profile = () => {
  const [clickedCount, setClickedCount] = useState(
    Array(STORY_PROFILE.length).fill(0)
  );

  const handleButtonClick = index => {
    const updatedClickedCount = [...clickedCount];
    updatedClickedCount[index]++;
    setClickedCount(updatedClickedCount);
  };

  return (
    <>
      {STORY_PROFILE.map((profile, index) => {
        return (
          <li key={index}>
            <button
              onClick={() => handleButtonClick(index)}
              className={`storyProfile ${
                clickedCount[index] === 1 || clickedCount[index] > 1
                  ? 'disabled'
                  : ''
              } ${clickedCount[index] < 1 ? 'on' : ''}`}
            >
              <div className="story-map">
                <div className="img-box">
                  <img
                    src={profile.src}
                    className="userProfileImage"
                    alt="profile"
                  />
                </div>
                <span className="userAccount">{profile.name}</span>
              </div>
            </button>
          </li>
        );
      })}
    </>
  );
};

export default Profile;

const STORY_PROFILE = [
  { key: 0, name: 'hyehye', src: '././images/story-image1.jpg' },
  { key: 1, name: 'helloworld', src: '././images/story-image2.jpg' },
  { key: 2, name: 'strawberry', src: '././images/story-image3.jpg' },
  { key: 3, name: 'yerin', src: '././images/story-image4.png' },
];
