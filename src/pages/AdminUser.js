import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const AdminUser = () => {
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
    <div id="Admin-Background">
      <div id="header">
        <div className="userlistbackground">
          <div className="tital-name">
            <h2>Admin User List</h2>
          </div>
          <div className="button1">
            <Link to={"./CreateUser"} className="button ">
              CreateUser
            </Link>
          </div>
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

        <div className="mainlist">
          <ul>
            <li className="List">Sno</li>
            <li className="List">Role</li>
            <li className="List">Language</li>
            <li className="List">Full Name</li>
            <li className="List">Email</li>
            <li className="List">Action</li>
          </ul>

          <div className="Listmargin">
            {user.map((item, index) => (
              <ul>
                <li className="ShowList">{index + 1}</li>
                <li className="ShowList">{item.user_role}</li>
                <li className="ShowList">{item.language}</li>
                <li className="ShowList">{item.name +" "+item.last_name}</li>
                <li className="ShowList">{item.email}</li>
                <Link
                  to={"/updateUserModule"}
                  className="addModulebutton ShowList"
                >
                  Add User Module
                </Link>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminUser;
