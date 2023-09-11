import React from "react";

const MultiLanguage = () => {
    return (
        
          <div id="profile-header">
          <div className="userlistbackground">
            <div className="tital-name-lang">
              <h1>Set Multi Language</h1>
            </div>
          </div>
         
         <div className="lang-btn">
         <div className="lang-margin-left">
            <button className="lang-btn-left">Russian</button>
            <button className="lang-btn-left">English</button>
            <button className="lang-btn-left">Italian</button>
         </div>
         <div className="lang-btn-right">
            <button className="error-btn">PUBLISH</button>
            <button className="error-btn">Add New Language</button>
         </div>
         
         </div>
         <div className="exercise-tag ">
          <input
            className="lang-tag"
            type="text"
            placeholder="Create Tag"
          ></input>
        </div>
      <div>
        
      </div>


        </div>
    )
}
export default MultiLanguage;