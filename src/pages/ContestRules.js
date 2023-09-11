import React, { useEffect }  from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

const ContestRules = () => {
  const [rule, setRule] = useState([]);
  useEffect(() => {
    getRule();
  }, []);

  const getRule = async () => {
   
    Axios.get("http://localhost:5000/createrules").then((response) => {
      setRule(response.data);
    });

  };
  return (
    <div id="header">
      <div className="userlistbackground">
        <div className="tital-name">
          <h2>Contest Rules List</h2>
        </div>
        <div className="button1">
          <Link to={"/createRules"} className="button ">
            Create Rule
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

      <div className="contest-rule-list-margin">
        <ul>
          <li className="contest-rule">S.no</li>
          <li className="contest-rule">Marathon</li>
          <li className="contest-rule">Date</li>
          <li className="contest-rule-rule">Rule</li>
        </ul>
        <div className="contest-rule-list-margin">
            {rule.map((item, index) => (
              <ul>
                <li className="contest-rule-list">{index + 1}</li>
                <li className="contest-rule-list">{item.marathon}</li>
                <li className="contest-rule-list">{item.date}</li>
                <li className="contest-rule-rule-list">{item.rule}</li>
                
              </ul>
            ))}
          </div>


      </div>
    </div>
  );
};
export default ContestRules;
