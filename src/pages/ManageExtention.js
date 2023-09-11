import React, { useEffect }  from "react";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const ManageExtention = () => {
  const [is_available_for_iOS, setIs_available_for_iOS] = useState("");
  const [select_marathon, setSelect_marathon] = useState("");
  const [course_title, setCourse_title] = useState("");
  const [courseSub_title, setCourseSub_title] = useState("");
  const [tenure, setTenure] = useState("");
  const [cost, setCost] = useState("");
  const [usdcost, setUsdcost] = useState("");
  const [marathon, setMarathon] = useState([]);
  const navigate = useNavigate();
  const [manageextention, setManageExtention] = useState([]);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    getMarathon();
    getManageExtention();
  }, []);
  useEffect(() => {
    getData();
  }, [marathon, manageextention]);

 
    const CreateExtension = async () => {
      try {
        Axios.post("http://localhost:5000/create_manage_extention", {
          is_available_for_iOS: is_available_for_iOS,
          select_marathon: select_marathon,
          course_title: course_title,
          courseSub_title: courseSub_title,
          tenure: tenure,
          cost: cost,
          usdcost: usdcost
          
        });
  
        navigate("/manageExtention");
      } catch (error) {
        console.error("Error:", error);
      }
    };
    
    const getMarathon = async () => {
   
      Axios.get("http://localhost:5000/createmarathons").then((response) => {
        setMarathon(response.data);
      });
      
  };
  const getManageExtention = async () => {
   
    Axios.get("http://localhost:5000/manageextentions").then((response) => {
      setManageExtention(response.data);
    });

  };
  const getData = () => {
    const data =  marathon.map((item, index) => { 
      return {...item, ...manageextention[index] };
    });
    setData(data);
  };
    return (
        <div>
        <div id="header-Extension">
        <div className="userlistbackground">
          <div className="tital-Extension">
            <h2>Create Extension</h2>
          </div>
        </div>
  
  <div className="create-extension">
        <div className="extension">
        <label className="extension-lable">Is_Available_for_iOS</label>
        <input type="checkbox"className="extension-cheak-box"
        value={is_available_for_iOS}
        onChange={(e) => setIs_available_for_iOS(e.target.value)}
        ></input>
      </div>
      <div className="extension">
        <label className="extension-lable">Select_Marathon</label>
        <select className="extension-input"
        value={select_marathon}
        onChange={(e) => setSelect_marathon(e.target.value)}
        >
                    <option value="" >--Select Marathan--</option>
                    {marathon.map((item, index) => (
                    <option >{item.tital}</option>
                    ))}
                    
                </select>
      </div>
      <div className="extension">
        <label className="extension-lable">Course_Title</label>
        <input className="extension-input"
        value={course_title}
        onChange={(e) => setCourse_title(e.target.value)}
        ></input>
      </div>
      <div className="extension">
        <label className="extension-lable">CourseSub_title</label>
        <input className="extension-input"
        value={courseSub_title}
        onChange={(e) => setCourseSub_title(e.target.value)}
        ></input>
      </div>
      <div className="extension">
        <label className="extension-lable">Tenure(in_days)</label>
        <input className="extension-input" type="number" 
        value={tenure}
        onChange={(e) => setTenure(e.target.value)}
        ></input>
      </div>
      <div className="extension">
        <label className="extension-lable">Cost</label>
        <input className="extension-input" type="number"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        ></input>
      </div>
      <div className="extension">
        <label className="extension-lable">USD_Cost</label>
        <input className="extension-input" type="number"
        value={usdcost}
        onChange={(e) => setUsdcost(e.target.value)}
        ></input>
      </div>
      <button className="extension-btn" onClick={CreateExtension}>Create Extension</button>
      </div>


      </div>

        <div id="header-Extension-list">
        <div className="userlistbackground">
          <div className="tital-Extension">
            <h2> Extension List</h2>
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
  
        <div className="Extension-list-margin">
          <ul>
            <li className="Extension-list-list">Sno</li>
            <li className="Extension-list-list">Title</li>
            <li className="Extension-list-list">Sub Title</li>
            <li className="Extension-list-list">Tenure</li>
            <li className="Extension-list-list">Cost</li>
            <li className="Extension-list-list">Image</li>
            <li className="Extension-list-list">Status</li>
            
          </ul>
          <div >
            {data.map((item, index) => (
              <ul className="gx-course-ul">
                <li className="ManageExtention-list-list">{index + 1}</li>
                <li className="ManageExtention-list-list">{item.course_title}</li>
                <li className="ManageExtention-list-list">{item.courseSub_title}</li>
                <li className="ManageExtention-list-list">{item.tenure}</li>
                <li className="ManageExtention-list-list">{item.cost}</li>
                <li className="ManageExtention-list-list">{item.image}</li>
                <li className="ManageExtention-list-list">active</li>
                
              </ul>
            ))}
          </div>
        </div>
      </div>
      </div>
    )
}
export default ManageExtention;