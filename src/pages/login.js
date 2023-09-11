import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const signup=()=>{
        navigate("/signup");
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    useEffect(() => {
        const data = localStorage.getItem("user");
        if (data) {
            navigate("/login");
        }   
    });

    const logininfo = async () => {
        console.log(email, password);

        let result = Axios.post("http://localhost:5000/login", {
            email: email,
            password: password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response.data.name) {
                localStorage.setItem("user", JSON.stringify(result));
                navigate("/profile");
            }
            else {
                console.log("please cheak email and password ");
            }
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
         <div className="login">
            <img src="https://miyabi-staging-service.azurewebsites.net/assets/img/logo-details-sm.svg"></img>
            <div className="login-margin">
            <button  className="buttonbox" type="button">Login</button>
            <button  onClick={signup} className="buttonbox" >Sign Up</button>
            <div className="inputbox-login-margin">
            <input className="inputbox-login" type="text" placeholder="Enter Email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input className="inputbox-login" type="password" placeholder="Enter Password"value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button  onClick={logininfo}className="save-buttonbox" type="button">Login</button>
            </div>
           
        </div>
       
    )
}

export default Login;