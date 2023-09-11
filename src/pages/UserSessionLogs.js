import React from "react";

const UserSessionLogs = () => {
  return (
    <div id="header-user-session-logs">
      <div className="userlistbackground">
        <div className="tital-name-user-session-logs">
          <h2> User Session Logs</h2>
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

      <div className="user-session-logs-list-margin">
        <ul>
          <li className="user-session-logs-list">Sno</li>
          <li className="user-session-logs-list">Email</li>
          <li className="user-session-logs-list">SessionCount</li>
          <li className="user-session-logs-ip-list">Ip List</li>
        </ul>
      </div>
    </div>
  );
};
export default UserSessionLogs;
