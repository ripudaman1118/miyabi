import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";

const UserPrivilege = () => {
  const [user, setUsers] = useState([]);
    useEffect(() => {
      getUser();
    }, []);
  
    const getUser = async () => {
     
      Axios.get("http://localhost:5000/users").then((response) => {
        setUsers(response.data);
      });
  
    };
  return (
    <div id="UserPrivilege-header">
      <div className="userlistbackground">
        <div className="tital-name-UserPrivilege">
          <h1>Select User Role</h1>
        </div>
       
      </div>
      <label className="UserPrivilege-lable" >Select User </label>
      <select className="UserPrivilege-inputbox">
          <option value="">--Select User--</option>
          {user.map((item, index) => (
             
             <option>{item.name +" "+ item.last_name}</option>
             
         ))}
        </select>
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
      <button className="UserPrivilege-btn-submit">Submit</button>
      </div>
    </div>
  );
};
export default UserPrivilege;
