import React from "react";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
    const navigate = useNavigate();
    const Back = () => {
      navigate("/profile");
    };
  return (
    <div id="profile-header">
      <div className="userlistbackground">
        <div className="tital-name-profile">
          <h1>View Profile</h1>
        </div>
      </div>
      <div id="profile-header2">
        <h3 id="profile">Change Password</h3>
        <div className="change-password-input">
          <div className="create-course">
            <label className="create-course-lable">Enter_Old_Password</label>
            <input
              className="create-course-inputbox"
              type="text"
              placeholder="Enter_Old_Password..."
            ></input>
          </div>
          <div className="create-course">
            <label className="create-course-lable">Enter_New_Password</label>
            <input
              className="create-course-inputbox"
              type="text"
              placeholder="Enter_New_Password..."
            ></input>
          </div>
          <div className="create-course">
            <label className="create-course-lable">Confirm_New_Password</label>
            <input
              className="create-course-inputbox"
              type="text"
              placeholder="Confirm_New_Password..."
            ></input>
          </div>
          <div className="buttons-password">
          <button class="button-red" onClick={Back} type="button">
            Cancal
          </button>
          <button class="button-green "type="submit">
            Change Password
          </button>
        </div>

        </div>
      </div>
    </div>
  );
};
export default ChangePassword;
