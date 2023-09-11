import React from "react";
import { useNavigate } from "react-router-dom";

const MultiError = () => {
    const navigate = useNavigate();
    const AddNewError = async () => {
      navigate("/addNewError");
    };
    return (
        <div id="profile-header">
          <div className="userlistbackground">
            <div className="tital-name-error">
              <h1>Set Multi Error</h1>
            </div>
          </div>
         <div>
            <button className="error-btn">PUBLISH</button>
            <button onClick={AddNewError} className="error-btn">Add New Error</button>
         </div>
          
          
        </div>
      );
}
export default MultiError;