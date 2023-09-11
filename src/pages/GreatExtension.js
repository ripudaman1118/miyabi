import React, { useEffect }  from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

const GreatExtension = () => {
  const [greatExtension, setGreatExtension] = useState([]);
  const [marathon, setMarathon] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    getGreatExtension();
    getMarathon();
  }, []);
  useEffect(() => {
    getData();
  }, [greatExtension,marathon,]);

  const getGreatExtension = async () => {
   
    Axios.get("http://localhost:5000/creategreatextensions").then((response) => {
      setGreatExtension(response.data);
    });

  };
  const getMarathon = async () => {
   
    Axios.get("http://localhost:5000/createmarathons").then((response) => {
      setMarathon(response.data);
    });

  };
  const getData = () => {
    const data =  marathon.map((item, index) => { 
      return {...item, ...greatExtension[index] };
    });
    setData(data);
  };

  return (
    <div id="header">
     
      <div className="userlistbackground">
          <div className="tital-name">
            <h2>Extension List</h2>
          </div>
          <div className="button1">
           
            <Link to={"/createGreatExtension"} className="button"> Create Great Extension</Link>
            
          </div>
        </div>

      <div className="Audit-select-search">
                <div>
                    <label className="Audit-lable">Show</label>
                    <select className="Audit-valuse" > 
                        <option value="1">25</option>
                        <option value="2">50</option>
                        <option value="3">75</option>
                        <option value="3">100</option>

                    </select>
                </div>

                <input type="text" class="Audit-Search" placeholder="Search" />

            </div>

        <div>
          <ul className="course-ul">
            <li className="course-list">Sno</li>
            <li className="course-list" >Title</li>
            <li className="course-list" >Sub Title</li>
            <li className="course-list" >Tenure</li>
            <li className="course-list" >Cost</li>
            <li className="course-list" >Image</li>
            <li className="course-list" >Start Date</li>
            <li className="course-list" >Status</li>
          </ul>
          <div className="course-list-list-margin">
            {data.map((item, index) => (
              <ul>
                <li className="course-list-list">{index + 1}</li>
                <li className="course-list-list">{item.tital}</li>
                <li className="course-list-list">{item.subtital}</li>
                <li className="course-list-list">{item.tenure}</li>
                <li className="course-list-list">{item.cost}</li>
                <li className="course-list-list">{item.image}</li>
                <li className="course-list-list">{item.start_date}</li>
                <li className="course-list-list">Draft</li>
                
              </ul>
            ))}
          </div>
        </div>
    </div>
  );
};
export default GreatExtension;
