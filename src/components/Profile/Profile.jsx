import React from 'react';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className="content">
      <header className="content__header">
        <img src="https://static9.depositphotos.com/1656823/1156/i/950/depositphotos_11563134-stock-photo-blue-water.jpg" alt="background"/>
      </header>

      <div className="content__wrapper">
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer/>
      </div>
    </div>
  );
}

export default Profile;