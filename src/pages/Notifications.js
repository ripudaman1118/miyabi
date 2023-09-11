import React, { useEffect }  from "react";
import { useState } from "react";
import Axios from "axios"

const Notifications = () => {
  const [marathon, setMarathon] = useState([]);
  useEffect(() => {
    getMarathon();
  }, []);

  const getMarathon = async () => {
   
    Axios.get("http://localhost:5000/createmarathons").then((response) => {
      setMarathon(response.data);
    });
  };
  return (
    <div id="header-notification">
      
      <div className="userlistbackground">
        <div className="tital-name-notification">
          <h2>Notifications</h2>
        </div>
      </div>
      <div className="notification-input">
        <label className="notification-lable">Marathan </label>
        <select className="notification-inputbox">
          <option value="">--Select Marathan--</option>
          {marathon.map((item, index) => (
                    <option >{item.tital}</option>
                    ))}
        </select>
        <label className="notification-lable">SSC </label>
        <select className="notification-inputbox">
          <option value="">--Select SSC--</option>
        </select>
        <label className="notification-lable">Extensions </label>
        <select className="notification-inputbox">
          <option value="">--Select All Extensions--</option>
        </select>
      </div>
      <div className="labal-margin">
        <label className="notification-lable">User </label>
        <select className="notification-inputbox">
          <option value="">--Select Tags--</option>
        </select>
      </div>

      <div className="image-url">
        <h3>Image URL</h3>
        <input className="notification-image-file" type="file"></input>
        <input
          className="notification-image-url"
          placeholder="Notifications image URL"
          type="text"
        ></input>
      </div>

      <div className="Notifications-Title">
        <h3>Notifications Title</h3>
        <input
          className="notification-image-url"
          placeholder="Notifications image URL"
          type="text"
        ></input>
      </div>
      <div className="Notifications-Body">
        <h3>Notifications Body</h3>
        <input
          className="notification-image-url"
          placeholder="Notifications image URL"
          type="text"
        ></input>
      </div>

      <div className="notification-list-margin">
        <ul className="notification-ul">
          <li className="notification-list">Sno</li>
          <li className="notification-list">Marathon</li>
          <li className="notification-list">Extension</li>
          <li className="notification-list">Course</li>
          <li className="notification-list">Title</li>
          <li className="notification-list">Smessageno</li>
          <li className="notification-list">Users</li>
          <li className="notification-list">Created Date</li>
        </ul>
      </div>
    </div>
  );
};
export default Notifications;
