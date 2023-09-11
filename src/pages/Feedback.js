import React from "react";

const Feedback = () => {
    return (
        <div id="header-feedback">
         <div className="userlistbackground">
        <div className="tital-name-feedback">
          <h2>Feedback</h2>
        </div>
      </div>


        <div className="feedback-list-margin">
          <ul className="feedback">
            <li className="feedback-list">Sno</li>
            <li className="feedback-list" >Email</li>
            <li className="feedback-list" >Rating</li>
            <li className="feedback-list" >Feedback</li>
            <li className="feedback-list" >Platform</li>
            <li className="feedback-list" >Version</li>
            <li className="feedback-list" >Date</li>
            <li className="feedback-list" >Reply</li>
          </ul>
        </div>
      </div>
    )
}
export default Feedback;