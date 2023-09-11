import React from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { useState } from "react";

const CreateCourse = () => {
  const [marathan, setMarathan] = useState("");
  const [coursetype, setCoursetype] = useState("");
  const [parentSSCormarathonlevel, setParentSSCormarathonlevel] = useState("");
  const [tital, setTital] = useState("");
  const [subtital, setSubtital] = useState("");
  const [cost, setCost] = useState("");
  const [startdate, setStartdate] = useState("");
  const [description, setDescription] = useState("");
  const [planid, setPlanid] = useState("");
  const [image, setimage] = useState("");

  const navigate = useNavigate();
  const Back = () => {
    navigate("/course");
  };
  const SubmitData = async () => {
    try {
      Axios.post("http://localhost:5000/create_course", {
        marathan: marathan,
        coursetype: coursetype,
        parentSSCormarathonlevel: parentSSCormarathonlevel,
        tital: tital,
        subtital: subtital,
        cost: cost,
        startdate: startdate,
        description: description,
        planid: planid,
        image: image,
      });

      navigate("/course");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div id="profile-header">
      <div className="userlistbackground">
        <div className="tital-name-profile">
          <h1>Manage Course</h1>
        </div>
      </div>
      <div className="buttons-create-rule">
        <button class="button-create-rule-back" onClick={Back} type="button">
          Back
        </button>
        <button
          class="button-create-rule-submit"
          onClick={SubmitData}
          type="submit"
        >
          Submit
        </button>
      </div>

      <div>
        <div className="create-course">
          <label className="create-course-lable">Marathan </label>
          <select className="create-course-inputbox"
           value={marathan}
           onChange={(e) => setMarathan(e.target.value)}
           >
            <option >--Select Marathan--</option>
            <option  >Test USD Cost</option>
                    <option  >FMD</option>
                    <option  >Copy of FMD</option>
                    <option  >Miyabi Mini</option>
          </select>
        </div>

        <div className="create-course">
          <label className="create-course-lable">Course type </label>
          <select className="create-course-inputbox"
           value={coursetype}
           onChange={(e) => setCoursetype(e.target.value)}
          >
            <option >--Select Cource type--</option>
            <option >--Young Body SSC--</option>
            <option >--Miyabi Basic SSC--</option>
            <option >--Miyabi Advance SSC--</option>
          </select>
        </div>

        <div className="create-course">
          <label className="create-course-lable">
            Parent SSC or marathon level{" "}
          </label>
          <select className="create-course-inputbox"
           value={parentSSCormarathonlevel}
           onChange={(e) => setParentSSCormarathonlevel(e.target.value)}
          >
            <option >--Select Tags--</option>
            <option >--Miyabi Basic --</option>
            <option >--Young Body--</option>
            <option >--New I--</option>
            <option >--Skin Care--</option>
          </select>
        </div>

        <div className="create-course">
          <label className="create-course-lable">Tital </label>
          <input className="create-course-inputbox" type="text"
           value={tital}
           onChange={(e) => setTital(e.target.value)}
          ></input>
        </div>

        <div className="create-course">
          <label className="create-course-lable">Sub Tital </label>
          <input className="create-course-inputbox" type="text"
           value={subtital}
           onChange={(e) => setSubtital(e.target.value)}
          ></input>
        </div>

        <div className="create-course">
          <label className="create-course-lable">Cost </label>
          <input className="create-course-inputbox" type="number"
           value={cost}
           onChange={(e) => setCost(e.target.value)}
          ></input>
        </div>

        <div className="create-course">
          <label className="create-course-lable">Start Date </label>
          <input className="create-course-inputbox" type="date"
           value={startdate}
           onChange={(e) => setStartdate(e.target.value)}
          ></input>
        </div>

        <div className="create-course">
          <label className="create-course-lable">Description </label>
          <input className="create-course-inputbox" type="text"
           value={description}
           onChange={(e) => setDescription(e.target.value)}
          ></input>
        </div>

        <div className="create-course">
          <label className="create-course-lable">Plan Id </label>
          <input className="create-course-inputbox" type="text"
           value={planid}
           onChange={(e) => setPlanid(e.target.value)}
          ></input>
        </div>

        <div className="create-course">
          <label className="create-course-lable">Image </label>
          <input className="create-course-inputbox" type="file"
           value={image}
           onChange={(e) => setimage(e.target.value)}
          ></input>
        </div>

        <div className="create-course">
          <label className="create-course-lable">Auto Crop</label>
          <input className="create-course-checkbox" type="checkbox"></input>
        </div>
      </div>
    </div>
  );
};
export default CreateCourse;
