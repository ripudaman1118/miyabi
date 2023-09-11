import React, { useEffect }  from "react";
import { useState } from "react";
import Axios from "axios";


const Contest = () => {
  const [marathon, setMarathon] = useState([]);
  useEffect(() => {
    getMarathon();
  }, []);

  const getMarathon = async () => {
   
    Axios.get("http://localhost:5000/createmarathons").then((response) => {
      setMarathon(response.data);
    });
  };

    return (
        <div>
 <div className="Audit-input">
            <label className="Audit-lable" >Marathan </label>
                <select className="Audit-inputbox"placeholder="--Select Marathan--">
                    <option >--Select Marathan--</option>
                    {marathon.map((item, index) => (
                    <option >{item.tital}</option>
                    ))}
                </select>
            </div>
            <div className="contest-checkbox-top">
    <input className="contest-checkbox" type="checkbox"></input>
    </div>
    <div className="before-after">
      <h3 className="before">BEFORE</h3>
      <h3 className="after">AFTER</h3>
    </div>
  <div  className="contest-img">
   
  <div className="img-box">
  <input className="contest-checkbox" type="checkbox"></input>
 <img src="C:\Users\Lambardar\OneDrive\Desktop\new-ripu-app2\src\pages\photo\1.jpg" height={150} width={150}></img>
 <img src=".\photo\1.jpg" height={150} width={150}></img>
  </div>
  <div className="img-box">
  <input className="contest-checkbox" type="checkbox"></input>
 <img src="./photo/2.jpg" height={150} width={150}></img>
 <img src="./photo/2.jpg" height={150} width={150}></img>
  </div>
  <div className="img-box">
  <input className="contest-checkbox" type="checkbox"></input>
 <img src="./photo/3.jpg" height={150} width={150}></img>
 <img src="./photo/3.jpg" height={150} width={150}></img>
  </div>
  <div className="img-box">
  <input className="contest-checkbox" type="checkbox"></input>
 <img src="./photo/4.jpg" height={150} width={150}></img>
 <img src="./photo/4.jpg" height={150} width={150}></img>
  </div>
  <div className="img-box">
  <input className="contest-checkbox" type="checkbox"></input>
 <img src="./photo/5.jpg" height={150} width={150}></img>
 <img src="./photo/5.jpg" height={150} width={150}></img>
  </div>
  <div className="img-box">
  <input className="contest-checkbox" type="checkbox"></input>
 <img src="./photo/6.jpg" height={150} width={150}></img>
 <img src="./photo/6.jpg" height={150} width={150}></img>
  </div>
  </div>
        
        <div id="header">
        <div className="comment-right">
        <div className="comment-select-search">
        <div>
            <label className="comment-lable">Show</label>
            <select className="comment-valuse">
              <option value="1">100</option>
              <option value="2">200</option>
              <option value="3">500</option>
              <option value="3">1000</option>
            </select>
          </div>
          <div>
              <ul className="comment-link">
                  <li>In Progress</li>
                  <li>All</li>
                  <li>FinalList</li>
              </ul>
          </div>
        
          
          <input type="text" class="comment-Search" placeholder="Enter Search Trams" />
        </div>
        </div>
  
  
  
  
        <div>
          <ul className="notification-ul">
            <li className="notification-list">Sno </li>
            <li className="notification-list">FullName</li>
            <li className="notification-list">Email</li>
            <li className="notification-list">Download</li>
            <li className="notification-list">FinalList</li>
            <li className="notification-list">Collage</li>
            <li className="notification-list">Login As User</li>
            <li className="notification-list">Send notification</li>
          </ul>
        </div>
      </div>

      </div>
    )
}
export default Contest;