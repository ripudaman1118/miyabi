import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

const CreateExercise = () => {
  const [exercise_name, setExercise_name] = useState("");
  const [exercise_description, setExercise_description] = useState("");
  const [language, setLanguage] = useState("");
  const navigate = useNavigate();
  const Exercise = async () => {
    navigate("/exercise");
  };
  const CreateExercise = async () => {
    navigate("/create_exercise");
  };
  const Save = async () => {
    try {
     

      Axios.post("http://localhost:5000/create_exercise", {
        exercise_name: exercise_name,
        exercise_description: exercise_description,
        language: language
       
      });

      navigate("/exercise");
    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <div id="Day-Cat-header">
      <div className="userlistbackground">
        <div className="tital-name-Day-Cat">
          <h1>Exercise</h1>
        </div>
      </div>
      <div className="Day-cat-btn-margin">
        <button onClick={Exercise} className="Day-cat-btn">
          Exercise
        </button>
        <button onClick={CreateExercise} className="Day-cat-btn">
          Create Exercise
        </button>
        <div className="buttons-Day-cat">
          <button onClick={Exercise} class="button-create-rule-back">
            Back
          </button>
          <button class="button-create-rule-submit ">Add</button>
          <button class="button-create-rule-submit "onClick={Save} >Save</button>
        </div>
      </div>
      <div>
        <ul className="Day-Cat-list">
          <li className="create-exercise-list">Exercise Name</li>
          <li className="create-exercise-list-mid">Exercise Description</li>
          <li className="create-exercise-list"> Language</li>
        </ul>
      </div>
      <div id="exercise">
      <div className="exercise-input">
        <input
          className="exercise-inputbox"
          type="text"
          placeholder="Exercise Name"
          value={exercise_name}
          onChange={(e) => setExercise_name(e.target.value)}
        ></input>
        <input
          className="exercise-inputbox-mid"
          type="text"
          placeholder="Category space"
          value={exercise_description}
          onChange={(e) => setExercise_description(e.target.value)}
        ></input>
        <select className="exercise-inputbox"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        >
          <option> Language</option>
          <option>Russian</option>
          <option>Italian</option>
        </select>
      </div>
      </div>

     
        <div className="exercise-tag ">
          <label className="exercise-lable">Tags</label>
          <input
            className="inputbox-tag"
            type="text"
            placeholder="Create Tag"
          ></input>
        </div>
        <div className="exercise-list-margin">
        <ul className="exercise-list-ul">
          <li className="exercise-list-list">Sno</li>
          <li className="exercise-list-list">Media Type</li>
          <li className="exercise-list-list">Source</li>
          <li className="exercise-list-list">Azure Content List</li>
          <li className="exercise-list-list">Action</li>
        </ul>
        </div>



    </div>
  );
};
export default CreateExercise;
