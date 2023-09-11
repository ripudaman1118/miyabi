import React, { useEffect }  from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

const Course = () => {
  const [course, setCourses] = useState([]);
  useEffect(() => {
    getCourse();
  }, []);

  const getCourse = async () => {
   
    Axios.get("http://localhost:5000/createourses").then((response) => {
      setCourses(response.data);
    });

  };

  return (
    <div id="header">
      <div className="userlistbackground">
        <div className="tital-name">
          <h2>Course List</h2>
        </div>
        <div className="button1">
          <Link to={"/createCourse"} class="button">
            Create Course
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

      <div>
        <ul className="course-ul">
          <li className="course-list">Sno</li>
          <li className="course-list">Course Name</li>
          <li className="course-list">CourseSubTitle</li>
          <li className="course-list">Tenure</li>
          <li className="course-list">Image</li>
          <li className="course-list">StartDate</li>
          <li className="course-list">CopyMarthonURL</li>
          <li className="course-list">CopyGiftURL</li>
        </ul>
        <div className="course-list-list-margin">
            {course.map((item, index) => (
              <ul>
                <li className="course-list-list">{index + 1}</li>
                <li className="course-list-list">{item.tital}</li>
                <li className="course-list-list">{item.subtital}</li>
                <li className="course-list-list">{item.cost}</li>
                <li className="course-list-list">{item.image}</li>
                <li className="course-list-list">{item.startdate}</li>
                <li className="course-list-list">copy...</li>
                <li className="course-list-list">copy...</li>
                
              </ul>
            ))}
          </div>
      </div>
    </div>
  );
};
export default Course;
