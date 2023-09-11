import React from "react";
import { useNavigate } from "react-router-dom";

const UpdateUserModule = () => {
    const navigate = useNavigate();
    const Back = () => {
      navigate("/");
    };
    return (
        <div id="UserPrivilege-header">
        <div className="userlistbackground">
          <div className="tital-name-UserPrivilege">
            <h1>Update User Module</h1>
          </div>
         
        </div>
       
        <div className="UserPrivilege-btn">
          <button className="UserPrivilege-btn-add">Add</button>
          <button className="UserPrivilege-btn-remove">Remove</button>
        </div>
  
        <div className="UserPrivilege-box">
          <div id="UserPrivilege-header2"></div>
          <div id="UserPrivilege-header3"></div>
        </div>
        <div className="UserPrivilege-btn-all-none">
          <button className="UserPrivilege-btn-all-1">ALL</button>
          <button className="UserPrivilege-btn-none">NONE</button>
          <button className="UserPrivilege-btn-all-2">ALL</button>
          <button className="UserPrivilege-btn-none">NONE</button>
        </div>
        <div className="submit-btn">
        <button className="Update-User-Module-update">Update</button>
        <button onClick={Back} className="Update-User-Module-back">Back</button>
        </div>
      </div>
    )
}
export default UpdateUserModule;