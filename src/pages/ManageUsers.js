import React from "react";

const ManageUsers = () => {
    return (
        <div id="header">
      <div className="userlistbackground">
        <div className="tital-name-notification">
          <h2>Manage Users</h2>
        </div>
       
      </div>

      <div className="Audit-select-search">
        <div>
          <label className="Audit-lable">Show</label>
          <select className="Audit-valuse">
            <option value="1">25</option>
            <option value="2">50</option>
            <option value="3">75</option>
            <option value="3">100</option>
          </select>
        </div>

        <input type="text" class="Audit-Search" placeholder="Search" />
      </div>
<div className="Marathon-overflow">
      <div className="contest-rule-list">
        <ul className="Marathon-list-ul">
          <li className="Marathon-list">S.no</li>
          <li className="Marathon-list">Profile Picture</li>
          <li className="Marathon-list">Display Name</li>
          <li className="Marathon-list">Email</li>
          <li className="Marathon-list">Instagram Id</li>
          <li className="Marathon-list">Phone Number</li>
          <li className="Marathon-list">Send Notification</li>
          <li className="Marathon-list">Login as user</li>
          <li className="Marathon-list">Action </li>
        </ul>
      </div>
      </div>
    </div>
    )
}
export default ManageUsers;