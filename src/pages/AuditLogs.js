import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";

const AuditLogs = () => {
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
    <div id="header">
      <div className="AuditLogs-Main">
        <div className="Audit-input">
          <label className="Audit-lable">User </label>
          <select className="Audit-inputbox">
            <option value="">--Select User--</option>
            {user.map((item, index) => (
             
                <option>{item.name +" "+ item.last_name}</option>
                
            ))}
          </select>
        </div>
        <div className="Audit-select-search">
          <div>
            <label className="Audit-lable">Show</label>
            <select className="Audit-valuse">
              <option value="1">100</option>
              <option value="2">200</option>
              <option value="3">500</option>
              <option value="3">1000</option>
            </select>
          </div>

          <input type="text" class="Audit-Search" placeholder="Search" />
        </div>
        <div className="Audit-List-main">
          <ul>
            <li className="Audit-List">Sno</li>
            <li className="Audit-List">Ip Address</li>
            <li className="Audit-List">Table Name</li>
            <li className="Audit-List">Action</li>
            <li className="Audit-List">CreatedDate</li>
            <li className="Audit-List">Changes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default AuditLogs;
