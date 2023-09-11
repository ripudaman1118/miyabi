import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

const CreateGreatExtension = () => {
  const [select_marathon, setSelect_marathon] = useState("");
  const [select_great_extension, setSelect_great_extension] = useState("");
  const [tital, setTital] = useState("");
  const [subtital, setSubtital] = useState("");
  const [tenure, setTenure] = useState("");
  const [cost, setCost] = useState("");
  const [usdcost, setUsdcost] = useState("");
  const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const Back = () => {
      navigate("/greatExtension");
    };
    const SubmitData = async () => {
      try {
        Axios.post("http://localhost:5000/create_great_extension", {
          select_marathon: select_marathon,
          select_great_extension: select_great_extension,
          tital: tital,
          subtital: subtital,
          tenure: tenure,
          cost: cost,
          usdcost: usdcost,
          description: description,
          
        });
  
        navigate("/greatExtension");
      } catch (error) {
        console.error("Error:", error);
      }
    };
    return (
        <div id="header-Manage-Extension">
        <div className="userlistbackground">
          <div className="tital-Extension">
            <h2>Create Great Extension</h2>
          </div>
        </div>
        <div className="buttons-create-rule">
          <button class="button-create-rule-submit "  onClick={SubmitData}type="submit">
            Submit
          </button>
          <button class="button-create-rule-back" onClick={Back} type="button">
            Back
          </button>
        </div>
  
  <div className="create-extension">
        <div className="extension">
        <label className="extension-lable">Is_Available_for_iOS</label>
        <input type="checkbox"className="extension-cheak-box"></input>
      </div>
      <div className="extension">
        <label className="extension-lable">Select_Marathon</label>
        <select className="extension-input"
        value={select_marathon}
        onChange={(e) => setSelect_marathon(e.target.value)}
        >
        <option  >--Select Marathan--</option>
                    <option  >Test USD Cost</option>
                    <option  >FMD</option>
                    <option  >Copy of FMD</option>
                    <option  >Miyabi Mini</option>
                </select>
      </div>
      <div className="extension">
        <label className="extension-lable">Select_Great_Extension</label>
        <select className="extension-input"
        value={select_great_extension}
        onChange={(e) => setSelect_great_extension(e.target.value)}
        >
        <option  >--Select Marathan--</option>
                    <option  >Test USD Cost</option>
                    <option  >FMD</option>
                    <option  >Copy of FMD</option>
                    <option  >Miyabi Mini</option>
                </select>
      </div>
      <div className="extension">
        <label className="extension-lable">Title</label>
        <input className="extension-input" placeholder="Enter Tital..."
        value={tital}
        onChange={(e) => setTital(e.target.value)}
        ></input>
      </div>
      <div className="extension">
        <label className="extension-lable">Sub_title</label>
        <input className="extension-input" placeholder="Enter Sub Tital..."
        value={subtital}
        onChange={(e) => setSubtital(e.target.value)}
        ></input>
      </div>
      <div className="extension">
        <label className="extension-lable">Tenure(in_days)</label>
        <input className="extension-input" type="number" placeholder="Days..."
        value={tenure}
        onChange={(e) => setTenure(e.target.value)}
        ></input>
      </div>
      <div className="extension">
        <label className="extension-lable">Cost</label>
        <input className="extension-input" type="number" placeholder="Enter Cost..."
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        ></input>
      </div>
      <div className="extension">
        <label className="extension-lable">USD_Cost</label>
        <input className="extension-input" type="number" placeholder="Enter USD cost..."
        value={usdcost}
        onChange={(e) => setUsdcost(e.target.value)}
        ></input>
      </div>
      <div className="extension">
        <label className="extension-lable">Description</label>
      </div>
      </div>
      
      


      </div>
    )
}
export default CreateGreatExtension;