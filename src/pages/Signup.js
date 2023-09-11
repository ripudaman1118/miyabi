import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';


const SignUp = () => {
    const navigate = useNavigate();
    const login=()=>{
        navigate("/login");
    }
    const [name, setName] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirm_password] = useState("");
    
  
    useEffect(() => {
      const data = localStorage.getItem("user");
      // if (data) {
      //   navigate("/profile");
      // }
    });
  
    const collectnData = async () => {
      try {
        console.log({ name, email, password });
  
        let result = Axios.post('http://localhost:5000/signup', {
          name: name,
          last_name: last_name,
          email: email,
          password: password,
          confirm_password: confirm_password,
  
        });
        // console.log(JSON.stringify(await result));
        localStorage.setItem("user", JSON.stringify(await result));
        if (result) {
          navigate("/profile");
        }
  
  
      } catch (error) {
        console.error("Error:", error);
      }
  
    }
  return (
       <div className="login">
          <img src="https://miyabi-staging-service.azurewebsites.net/assets/img/logo-details-sm.svg"></img>
          <div className="signup-margin">
          <button onClick={login} className="buttonbox" >Login</button>
          <button  className="buttonbox" type="button">Sign Up</button>
          <div className="inputbox-login-margin">
          <input className="inputbox-login" type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)}/>
          <input className="inputbox-login" type="text" placeholder="Enter Last Name"value={last_name} onChange={(e) => setLast_name(e.target.value)} />
          <input className="inputbox-login" type="text" placeholder="Enter Email"value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="inputbox-login" type="password" placeholder="Enter Password"value={password} onChange={(e) => setPassword(e.target.value)} />
          <input className="inputbox-login" type="password" placeholder="Enter Password"value={confirm_password} onChange={(e) => setConfirm_password(e.target.value)} />
          </div>
          <button  onClick={collectnData} className="save-buttonbox" type="button">Sign Up</button>
          </div>
         
      </div>
     
  )
}

export default SignUp;