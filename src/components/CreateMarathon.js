import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

const CreateMarathon = () => {
  const [isPaid, setIsPaid] = useState("");
  const [is_available_for_iOS, setIs_available_for_iOS] = useState("");
  const [tital, setTital] = useState("");
  const [subtital, setSubtital] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [number_of_day, setNumber_of_day] = useState("");
  const [cost, setCost] = useState("");
  const [usdcost, setUsdcost] = useState("");
  const [materialavailibilitydays, setMaterialavailibilitydays] = useState("");
  const [ispublic, setIspublic] = useState("");
  const [isdisplay, setIsdisplay] = useState("");
  const [contest, setContest] = useState("");
  const [comment, setComment] = useState("");
  const [autocrop, setAutocrop] = useState("");
  const [language, setLanguage] = useState("");
  const [parent_SSC_or_marathon_level, setParent_SSC_or_marathon_level] = useState("");
  const [start_date, setStart_date] = useState("");
  const [contest_upload_last_date, setContest_upload_last_date] = useState("");
  const [finalist_announcement_date, setFinalist_announcement_date] = useState("");
  const [voting_last_date, setVoting_last_date] = useState("");
  const [winner_announcement_date, setWinner_announcement_date] = useState("");
    const navigate = useNavigate();
    const Back = () => {
      navigate("/manageMarathon");
    };
    const SubmitData = async () => {
      try {
        Axios.post("http://localhost:5000/create_marathon", {
          isPaid:isPaid,
          is_available_for_iOS:is_available_for_iOS,
      tital:tital,
      subtital:subtital,
      description:description,
      image:image,
      number_of_day:number_of_day,
      cost:cost,
      usdcost:usdcost,
      materialavailibilitydays:materialavailibilitydays,
      ispublic:ispublic,
      isdisplay:isdisplay,
      contest:contest,
      comment:comment,
      autocrop:autocrop,
      language:language,
      parent_SSC_or_marathon_level:parent_SSC_or_marathon_level,
      start_date:start_date,
      contest_upload_last_date:contest_upload_last_date,
      finalist_announcement_date:finalist_announcement_date,
      voting_last_date:voting_last_date,
      winner_announcement_date:winner_announcement_date
          
        });
        navigate("/manageMarathon");
      } catch (error) {
        console.error("Error:", error);
      }
    };
    return (
        <div id="Manage-Marathon-header">
        <div className="userlistbackground">
          <div className="Manage-Marathon-tital">
            <h1>() - Manage Marathon</h1>
          </div>
          </div>
          <div className="buttons-create-rule">
          <button class="button-create-rule-back" onClick={Back}  type="button">
            Back
          </button>
          <button class="button-create-rule-submit "onClick={SubmitData}type="submit">
            Submit
          </button>
        </div>

        <div>
                
        <div className="create-course">
                <label className="create-course-lable" >Is Paid</label>
                <input className="create-course-checkbox" type="checkbox"
                value={isPaid}
                onChange={(e) => setIsPaid(e.target.value)} ></input>
                </div>
                <div className="create-course">
                <label className="create-course-lable" >Is_Available_for_iOS</label>
                <input className="create-course-checkbox" type="checkbox" 
                value={is_available_for_iOS}
                onChange={(e) => setIs_available_for_iOS(e.target.value)}></input>
                </div>

                <div className="create-course">
                <label className="create-course-lable" >Tital </label>
                <input className="create-course-inputbox" type="text" placeholder="Enter Tital..."
                value={tital}
                onChange={(e) => setTital(e.target.value)} ></input>
                </div>

                <div className="create-course">
                <label className="create-course-lable" >Sub Tital </label>
                <input className="create-course-inputbox" type="text" placeholder="Enter Sub Tital..."
                value={subtital}
                onChange={(e) => setSubtital(e.target.value)}></input>
                </div>

                <div className="create-course">
                <label className="create-course-lable" >Description </label>
                <input className="create-course-inputbox" type="text" placeholder="Enter Description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}></input>
                </div>

                <div className="create-course">
                <label className="create-course-lable" >Image </label>
                <input   className="create-course-inputbox" type="file" 
                value={image}
                onChange={(e) => setImage(e.target.value)}></input>
                </div>

                <div className="create-course">
               <label className="create-course-lable" >Number Of Days </label>
                <input className="create-course-inputbox" type="number" placeholder="Number Of Days..."
                value={number_of_day}
                onChange={(e) => setNumber_of_day(e.target.value)}></input>
               </div>

               <div className="create-course">
               <label className="create-course-lable" >Cost </label>
                <input className="create-course-inputbox" type="number" placeholder="Cost..."
                value={cost}
                onChange={(e) => setCost(e.target.value)}></input>
               </div>
               <div className="create-course">
               <label className="create-course-lable" >USD Cost </label>
                <input className="create-course-inputbox" type="number" placeholder="USD Cost..."
                value={usdcost}
                onChange={(e) => setUsdcost(e.target.value)}></input>
               </div>

               
               <div className="create-course">
               <label className="create-course-lable" >MaterialAvailibilityDays </label>
                <input className="create-course-inputbox" type="number" placeholder="MaterialAvailibilityDays..."
                value={materialavailibilitydays}
                onChange={(e) => setMaterialavailibilitydays(e.target.value)}></input>
               </div>

               <div className="create-course">
                <label className="create-course-lable" >Is Public</label>
                <input className="create-course-checkbox" type="checkbox" 
                value={ispublic}
                onChange={(e) => setIspublic(e.target.value)}></input>
                </div>

                <div className="create-course">
                <label className="create-course-lable" >Is Display</label>
                <input className="create-course-checkbox" type="checkbox"
                value={isdisplay}
                onChange={(e) => setIsdisplay(e.target.value)} ></input>
                </div>

                <div className="create-course">
                <label className="create-course-lable" >Contest</label>
                <input className="create-course-checkbox" type="checkbox"
                value={contest}
                onChange={(e) => setContest(e.target.value)} ></input>
                </div>

                <div className="create-course">
                <label className="create-course-lable" >Comment</label>
                <input className="create-course-checkbox" type="checkbox"
                value={comment}
                onChange={(e) => setComment(e.target.value)} ></input>
                </div>

                <div className="create-course">
                <label className="create-course-lable" >Auto Crop</label>
                <input className="create-course-checkbox" type="checkbox" 
                value={autocrop}
                onChange={(e) => setAutocrop(e.target.value)}></input>
                </div>

                <div className="create-course">
                <label className="create-course-lable" >Language </label>
                <select className="create-course-inputbox"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}>
                    <option value="" >--Select Language--</option>
                    <option  >--Russian --</option>
                    <option >--Italian--</option>
                </select>
                </div>

                <div className="create-course">
                <label className="create-course-lable" >Parent SSC or marathon level </label>
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
                <label className="create-course-lable" >Start Date </label>
                <input className="create-course-inputbox" type="date"
                value={start_date}
                onChange={(e) => setStart_date(e.target.value)} ></input>
                </div>


                <div className="create-course">
                <label className="create-course-lable" >Contest_Upload_Last_Date </label>
                <input className="create-course-inputbox" type="date" 
                value={contest_upload_last_date}
                onChange={(e) => setContest_upload_last_date(e.target.value)}></input>
                </div>

                <div className="create-course">
                <label className="create-course-lable" >Finalist_announcement_Date </label>
                <input className="create-course-inputbox" type="date"
                value={finalist_announcement_date}
                onChange={(e) => setFinalist_announcement_date(e.target.value)} ></input>
                </div>

                <div className="create-course">
                <label className="create-course-lable" >Voting_Last_Date </label>
                <input className="create-course-inputbox" type="date" 
                value={voting_last_date}
                onChange={(e) => setVoting_last_date(e.target.value)}></input>
                </div>

                <div className="create-course">
                <label className="create-course-lable" >Winner_Announcement_Date</label>
                <input className="create-course-inputbox" type="date" 
                value={winner_announcement_date}
                onChange={(e) => setWinner_announcement_date(e.target.value)}></input>
                </div>
 

        </div>
       
      </div>
    )
}
export default CreateMarathon;