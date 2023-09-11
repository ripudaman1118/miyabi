import React, { useEffect }  from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

const ManageMarathon = () => {
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
        <div className="tital-name">
          <h2>Marathon List</h2>
        </div>
        <div className="button1">
          <Link to={"/createMarathon"} className="button ">
            Create Marathon
          </Link>
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
          <li className="Marathon-list">Marathon Name</li>
          <li className="Marathon-list">View</li>
          <li className="Marathon-list">Tenure</li>
          <li className="Marathon-list">Description</li>
          <li className="Marathon-list">Image</li>
          <li className="Marathon-list">Start Date</li>
          <li className="Marathon-list">Action</li>
          <li className="Marathon-list">Copy Marathon URL </li>
          <li className="Marathon-list">Copy Gift URL</li>
        </ul>
        <div>
            {marathon.map((item, index) => (
              <ul  className="Marathon-list-list-ul">
                <li className="Marathon-list-list">{index + 1}</li>
                <li className="Marathon-list-list">{item.tital}</li>
                <li className="Marathon-list-list">go....</li>
                <li className="Marathon-list-list">{item.tenure}</li>
                <li className="Marathon-list-list">{item.description}</li>
                <li className="Marathon-list-list">{item.image}</li>
                <li className="Marathon-list-list">{item.start_date}</li>
                <li className="Marathon-list-list">{item.action}</li>
                <li className="Marathon-list-list">copy...</li>
                <li className="Marathon-list-list">copy...</li>
                
              </ul>
            ))}
          </div>
      </div>
      </div>
    </div>
    )
}
export default ManageMarathon;