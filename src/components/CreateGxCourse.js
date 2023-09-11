import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

const CreateGxCourse = () => {
  const [parent_SSC_or_marathon_level, setParent_SSC_or_marathon_level] =
    useState("");
  const [is_available_for_iOS, setIs_available_for_iOS] = useState("");
  const [tital, setTital] = useState("");
  const [subtital, setSubtital] = useState("");
  const [cost, setCost] = useState("");
  const [usdcost, setUsdcost] = useState("");
  const [startdate, setStartdate] = useState("");
  const [description, setDescription] = useState("");
  const [number_of_day, setNumber_of_day] = useState("");
  const [materialavailibilitydays, setMaterialavailibilitydays] = useState("");
  const [image, setImage] = useState("");
  const [autocrop, setAutocrop] = useState("");

  const navigate = useNavigate();
  const Back = () => {
    navigate("/gxCourse");
  };
  const SubmitData = async () => {
    try {
      Axios.post("http://localhost:5000/create_gx_course", {
        parent_SSC_or_marathon_level: parent_SSC_or_marathon_level,
        is_available_for_iOS: is_available_for_iOS,
        tital: tital,
        subtital: subtital,
        cost: cost,
        usdcost: usdcost,
        startdate: startdate,
        description: description,
        number_of_day: number_of_day,
        materialavailibilitydays: materialavailibilitydays,
        image: image,
        autocrop: autocrop,
      });
      navigate("/gxCourse");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div id="Manage-Gx-Course-header">
      <div className="userlistbackground">
        <div className="tital-name-profile">
          <h1>Manage Gx Course</h1>
        </div>
      </div>
      <div className="buttons-create-rule">
        <button class="button-create-rule-back" onClick={Back} type="button">
          Back
        </button>
        <button class="button-create-rule-submit "onClick={SubmitData} type="submit">
          Submit
        </button>
      </div>

      <div>
        <div className="create-course">
          <label className="create-course-lable">
            Parent SSC or marathon level{" "}
          </label>
          <select className="create-course-inputbox"
                value={parent_SSC_or_marathon_level}
                onChange={(e) => setParent_SSC_or_marathon_level(e.target.value)}>
            <option >--Select Tags--</option>
            <option >--Miyabi Basic --</option>
            <option >--Young Body--</option>
            <option >--New I--</option>
            <option >--Skin Care--</option>
          </select>
        </div>
        <div className="create-course">
          <label className="create-course-lable">Is_Available_for_iOS</label>
          <input className="create-course-checkbox" type="checkbox"
          value={is_available_for_iOS}
          onChange={(e) => setIs_available_for_iOS(e.target.value)}></input>
        </div>

        <div className="create-course">
          <label className="create-course-lable">Tital </label>
          <input
            className="create-course-inputbox"
            type="text"
            placeholder="Enter Tital..."
            value={tital}
          onChange={(e) => setTital(e.target.value)}
          ></input>
        </div>

        <div className="create-course">
          <label className="create-course-lable">Sub Tital </label>
          <input
            className="create-course-inputbox"
            type="text"
            placeholder="Enter Sub Tital..."
            value={subtital}
          onChange={(e) => setSubtital(e.target.value)}
          ></input>
        </div>

        <div className="create-course">
          <label className="create-course-lable">Cost </label>
          <input
            className="create-course-inputbox"
            type="number"
            placeholder="Cost..."
            value={cost}
          onChange={(e) => setCost(e.target.value)}
          ></input>
        </div>
        <div className="create-course">
          <label className="create-course-lable">USD Cost </label>
          <input
            className="create-course-inputbox"
            type="number"
            placeholder="USD Cost..."
            value={usdcost}
          onChange={(e) => setUsdcost(e.target.value)}
          ></input>
        </div>

        <div className="create-course">
          <label className="create-course-lable">Start Date </label>
          <input className="create-course-inputbox" type="date"
          value={startdate}
          onChange={(e) => setStartdate(e.target.value)}></input>
        </div>

        <div className="create-course">
          <label className="create-course-lable">Description </label>
          <input
            className="create-course-inputbox"
            type="text"
            placeholder="Enter Description..."
            value={description}
          onChange={(e) => setDescription(e.target.value)}
          ></input>
        </div>

        <div className="create-course">
          <label className="create-course-lable">Number Of Days </label>
          <input
            className="create-course-inputbox"
            type="number"
            placeholder="Number Of Days..."
            value={number_of_day}
          onChange={(e) => setNumber_of_day(e.target.value)}
          ></input>
        </div>
        <div className="create-course">
          <label className="create-course-lable">
            MaterialAvailibilityDays{" "}
          </label>
          <input
            className="create-course-inputbox"
            type="number"
            placeholder="MaterialAvailibilityDays..."
            value={materialavailibilitydays}
          onChange={(e) => setMaterialavailibilitydays(e.target.value)}
          ></input>
        </div>

        <div className="create-course">
          <label className="create-course-lable">Image </label>
          <input className="create-course-inputbox" type="file"
          value={image}
          onChange={(e) => setImage(e.target.value)}></input>
        </div>

        <div className="create-course">
          <label className="create-course-lable">Auto Crop</label>
          <input className="create-course-checkbox" type="checkbox"
          value={autocrop}
          onChange={(e) => setAutocrop(e.target.value)}></input>
        </div>
      </div>
    </div>
  );
};
export default CreateGxCourse;
