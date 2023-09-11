import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

const CreateRules = () => {
  const [marathon, setMarathon] = useState("");
  const [date, setDate] = useState("");
 const [rule, setRule] = useState("");

    const navigate = useNavigate();
  const Back = () => {
    navigate("/contestRules");
  };
  
  const Submitrule = async () => {
    try {
     

      Axios.post("http://localhost:5000/create_rule", {
        marathon: marathon,
        date: date,
        rule: rule
      });

      navigate("/contestRules");
    } catch (error) {
      console.error("Error:", error);
    }
  };
    return (
        <div id="profile-header">
        <div className="userlistbackground">
          <div className="tital-name-profile">
            <h1>Create Rule</h1>
          </div>
          </div>
          <div className="buttons-create-rule">
          <button class="button-create-rule-submit "onClick={Submitrule} type="submit" >
            Submit
          </button>
          <button class="button-create-rule-back" onClick={Back} type="button">
            Back
          </button>
        </div>
        <div>
          <ul  className="create-rule-list">
            <li className="create-rule-list-ExerciseName">Exercise Name</li>
            <li className="create-rule-list-Rule">Rule</li>
          </ul>
        </div>
        <select className="create-rule-inputbox"
        value={marathon}
        onChange={(e) => setMarathon(e.target.value)}
        >
                    <option  >--Select Marathan--</option>
                    <option  >Test USD Cost</option>
                    <option  >FMD</option>
                    <option  >Copy of FMD</option>
                    <option  >Miyabi Mini</option>
                </select>
                <div className="create-rule-date">
                <label className="create-rule-lable">Date </label>
                <input className="create-rule-inputbox-date" type="date" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                ></input>
                </div>
        
        
      </div>
    )
}
export default CreateRules;