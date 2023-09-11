import React, { useEffect }  from "react";
import { useState } from "react";
import Axios from "axios";

const ManageComments = () => {
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
    <div id="header">
      <div className="userlistbackground">
        <div className="tital-name-notification">
          <h2>Message</h2>
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
      <div className="comment-button">
        <button className="button">New Comment</button>
      </div>


      <div className="comment-right">
      <div className="comment-select-search">
        <div>
            <ul className="comment-link">
                <li>New</li>
                <li>All</li>
                <li>Waiting for approval</li>
                <li>Not Replied</li>
                <li>Delete</li>
            </ul>
        </div>
        <div>
          <label className="comment-lable">Show</label>
          <select className="comment-valuse">
            <option value="1">10</option>
            <option value="2">50</option>
            <option value="3">100</option>
            <option value="3">500</option>
          </select>
        </div>
        <label className="comment-lable">Search</label>
        <input type="text" class="comment-Search" placeholder="Enter Search Trams" />
      </div>
      </div>




      <div>
        <ul className="notification-ul">
          <li className="notification-list">Exercise </li>
          <li className="notification-list">Sno</li>
          <li className="notification-list">Profile Image</li>
          <li className="notification-list">Comment</li>
          <li className="notification-list">In Response To</li>
          <li className="notification-list">Submitted on</li>
          <li className="notification-list">Current Status</li>
          <li className="notification-list">Count</li>
        </ul>
      </div>
    </div>
  );
};
export default ManageComments;
