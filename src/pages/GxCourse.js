import React, { useEffect }  from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

const GxCourse = () => {
  const [creategxcourse, setCreateGxCourse] = useState([]);

  useEffect(() => {
    getCreateGxCourse();
  
  }, []);
 
  const getCreateGxCourse = async () => {
   
    Axios.get("http://localhost:5000/creategxcourses").then((response) => {
      setCreateGxCourse(response.data);
    });

  };


    return (
        <div id="header">
     
        <div className="userlistbackground">
            <div className="tital-name">
              <h2>GX Course List</h2>
            </div>
            <div className="button1">
             
              <Link to={"/createGxCourse"} className="button"> CreateCourse</Link>
              
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
            <ul className="gx-course-ul">
              <li className="gx-course-list">Sno</li>
              <li className="gx-course-list" >Course Name</li>
              <li className="gx-course-list" >Course Sub Title</li>
              <li className="gx-course-list" >Tenure</li>
              <li className="gx-course-list" >Image</li>
              <li className="gx-course-list" >Start Date</li>
            </ul>
            <div >
            {creategxcourse.map((item, index) => (
              <ul className="gx-course-ul">
                <li className="gx-course-data-list">{index + 1}</li>
                <li className="gx-course-data-list">{item.tital}</li>
                <li className="gx-course-data-list">{item.subtital}</li>
                <li className="gx-course-data-list">{item.tenure}</li>
                <li className="gx-course-data-list">{item.image}</li>
                <li className="gx-course-data-list">{item.startdate}</li>
                
              </ul>
            ))}
          </div>
          </div>
      </div>
    )
}
export default GxCourse;