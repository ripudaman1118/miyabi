import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const DayCategory = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
   
    Axios.get("http://localhost:5000/createcategorys").then((response) => {
      setCategory(response.data);
    });

  };
  const Category = async () => {
    navigate("/dayCategory");
  };
  const CreateCategory = async () => {
    navigate("/createcategory");
  };

  return (
    <div id="Day-Cat-header">
      <div className="userlistbackground">
        <div className="tital-name-Day-Cat">
          <h1>Category</h1>
        </div>
      </div>
      <div className="Day-cat-btn-margin">
        <button onClick={Category} className="Day-cat-btn">
          Category
        </button>
        <button onClick={CreateCategory} className="Day-cat-btn">
          Create Category
        </button>
      </div>
      <div>
        <ul className="Day-Cat-list">
          <li className="Day-Cat-list-li-list">Sno</li>
          <li className="Day-Cat-list-li-list">Category Name</li>
          <li className="Day-Cat-list-li-list">Category Image</li>
          <li className="Day-Cat-list-li-list">Action</li>
        </ul>
        <div  className="Category-list-list">
            {category.map((item, index) => (
              <ul>
                <li className="Day-Category-list">{index + 1}</li>
                <li className="Day-Category-list">{item.category_name}</li>
                <li className="Day-Category-list">{item.category_image}</li>
                <li className="Day-Category-list"></li>
               
              </ul>
            ))}
          </div>
      </div>
    </div>
  );
};
export default DayCategory;
