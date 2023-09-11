import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

const CreateCategory = () => {
  const [category_name, setCategory_name] = useState("");
  const [category_image, setCategory_image] = useState("");
  const [language, setLanguage] = useState("");
  const navigate = useNavigate();
  const Category = async () => {
    navigate("/dayCategory");
  };
  const CreateCategory = async () => {
    navigate("/createcategory");
  };
  const Save = async () => {
    try {
     

      Axios.post("http://localhost:5000/create_category", {
        category_name: category_name,
        category_image: category_image,
        language: language
       
      });

      navigate("/dayCategory");
    } catch (error) {
      console.error("Error:", error);
    }
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

        <div className="buttons-Day-cat">
          <button onClick={Category} class="button-create-rule-back">
            Back
          </button>
          <button class="button-create-rule-submit ">Add</button>
          <button onClick={Save} class="button-create-rule-submit ">Save</button>
        </div>
      </div>

      <div>
        <ul className="Day-Cat-list">
          <li className="Category-list-sno">Sno</li>
          <li className="Category-list">Category Name</li>
          <li className="Category-list">Category Image</li>
          <li className="Category-list">Language</li>
        </ul>
      </div>

      <div className="Category-input">
        <h3 className="Category-1">1</h3>
        <input
          className="Category-inputbox"
          type="text"
          placeholder="Category Name"
          value={category_name}
          onChange={(e) => setCategory_name(e.target.value)}
        ></input>
        <input className="Category-inputbox" type="file"
         value={category_image}
         onChange={(e) => setCategory_image(e.target.value)}
        ></input>
        <select className="Category-inputbox"
         value={language}
         onChange={(e) => setLanguage(e.target.value)}>
          <option> Language</option>
          <option>Russian</option>
          <option>Italian</option>
        </select>
      </div>
    </div>
  );
};
export default CreateCategory;
