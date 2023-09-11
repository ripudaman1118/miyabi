import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div id="profile-header">
      <div className="userlistbackground">
        <div className="tital-name-profile">
          <h1>Profile</h1>
        </div>
      </div>
      <div id="profile-header2">
        <h3 id="profile">Profile</h3>
        <div className="profile-btn">
        <Link to={"/editProfile"} className="edit-profile ">  Edit Profile </Link>
        <Link to={"/changePassword"} className="change-password "> Change Password</Link>
      </div>
      </div>
      
    </div>
  );
};
export default Profile;
