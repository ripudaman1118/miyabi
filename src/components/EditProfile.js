import React from "react";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
    const navigate = useNavigate();
    const Back = () => {
      navigate("/profile");
    };
  return (
    <div id="profile-header">
      <div className="userlistbackground">
        <div className="tital-name-profile">
          <h1>Edit Profile</h1>
        </div>
      </div>
      <div id="profile-header2">
        <h3 id="profile">Edit Profile</h3>
           

           <div className="edit-profile-page">
            <div className="edit-profile-file">
                <h1>Profile photo</h1>
               <div>
               <label className="edit-profile-label">Upload_a_different_photo...</label>
            <input className="edit-profile-input-file-box" type="file" placeholder="Enter First Name"></input>
               </div>

            </div>

            <div className="personal-info">
            <h2>Personal Info</h2>
            <label className="edit-profile-label">First Name:</label>
            <input className="edit-profile-input-box" type="text" placeholder="Enter First Name"></input>
            <label className="edit-profile-label">Last Name:</label>
            <input className="edit-profile-input-box" type="text" placeholder="Enter Last Name"></input>
            </div>
           </div>



         
        
          <div className="buttons-password">
          <button class="button-save-change "type="submit">
            Save Change
          </button>
          <button class="button-cancal" onClick={Back} type="button">
            Cancal
          </button>
         
        </div>

        </div>
      </div>
  
  );
}
export default EditProfile;