import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Exercise = () => {
  const navigate = useNavigate();
  const [exercise, setExercise] = useState([]);
  useEffect(() => {
    getExercise();
  }, []);
  const getExercise = async () => {
   
    Axios.get("http://localhost:5000/createexercises").then((response) => {
      setExercise(response.data);
    });

  };
  const Exercise = async () => {
    navigate("/exercise");
  };
  const CreateExercise = async () => {
    navigate("/create_exercise");
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
      </div>
      <div>
        <ul className="Day-Cat-list">
          <li className="Day-Cat-list-li-list">Sno</li>
          <li className="Day-Cat-list-li-list">Exercise Name</li>
          <li className="Day-Cat-list-li-list">Exercise Description</li>
          <li className="Day-Cat-list-li-list">Action</li>
        </ul>
        <div  className="Category-list-list">
            {exercise.map((item, index) => (
              <ul >
                <li className="Day-Category-list">{index + 1}</li>
                <li className="Day-Category-list">{item.exercise_name}</li>
                <li className="Day-Category-list">{item.exercise_description}</li>
                <li className="Day-Category-list"></li>
               
              </ul>
            ))}
          </div>
      </div>
    </div>
  );
};
export default Exercise;
