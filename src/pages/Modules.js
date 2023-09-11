import React from "react";
import { Link } from "react-router-dom";

const Modules = () => {
    return (
        <div id="header">
        <div className="userlistbackground">
          <div className="tital-name">
            <h2>Module List</h2>
          </div>
          <div className="button1">
            <Link className="button ">
            Create Module
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
  
        <div >
          <ul className="module-list-ul">
            <li className="module-list-sno">S.no</li>
            <li className="module-list">Module</li>
            <li className="module-list">Font</li>
          </ul>
        </div>
       
      </div>
    )
}
export default Modules;