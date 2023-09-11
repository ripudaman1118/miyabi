import React from "react";

const AddNewError = () => {
  return (
    <div className="Add-Error-header">
     <div className="Add-Error-margin">
     <div className="Add-Error">
        <label className="Add-Error-lable">English</label>
        <input className="Add-Error-valuse" type="text"></input>
      </div>

      <div className="Add-Error">
        <label className="Add-Error-lable">Italian</label>
        <input className="Add-Error-valuse" type="text"></input>
      </div>
      <div className="Add-Error">
        <label className="Add-Error-lable">Russian</label>
        <input className="Add-Error-valuse" type="text"></input>
      </div>
     </div>
    </div>
  );
};
export default AddNewError;
