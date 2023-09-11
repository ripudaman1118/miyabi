import React from "react";
import { useNavigate } from "react-router-dom";



const LogOut = () => {
    const navigate = useNavigate();
    const login=()=>{
        navigate("/login");
        
    }
     
   
    return (
        <div className="logout-header">
         <button onClick={login} className="logout-btn" type="button">logout</button>
        </div>
    )
}
export default LogOut;