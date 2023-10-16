import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
  <div className={s.content}>
    <div>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg'></img>
    </div>
    <div>
      ava + desctiption
    </div>
    <MyPosts />
  </div>
  )

}

export default Profile;