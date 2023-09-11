import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

const CreateUser = () => {
  const [user_role, setUser_Role] = useState("");
  const [language, setLanguage] = useState("");
  const [name, setName] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_Password] = useState("");

  const navigate = useNavigate();
  const Back = () => {
    navigate("/");
  };

  const SubmitData = async () => {
    try {
     

      Axios.post("http://localhost:5000/create_user", {
        user_role: user_role,
        language: language,
        name: name,
        last_name: last_name,
        email: email,
        password: password,
        confirm_password: confirm_password,
      });

      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className=" userhead">
        <h1 className="userlistbackground">Create User</h1>
      </div>
      <div className=" userbottom">
        <div className="user ">
          <label>User Role:</label>
          <select
            className="inputbox"
            value={user_role}
            onChange={(e) => setUser_Role(e.target.value)}
          >
            <option>---Select Role---</option>
            <option>User</option>
            <option>Admin</option>
          </select>
        </div>
        <div className="user ">
          <label >Language:</label>
          <select
            className="inputbox"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>---Select Language---</option>
            <option>Russian</option>
            <option>Italian</option>
          </select>
        </div>
        <div className="user">
          <label for="name">Name:</label>
          <input
            className="inputbox"
            type="text"
            id="name"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            pattern="^[a-zA-Z]"
          ></input>
        </div>
        <div className="user ">
          <label for="last-name">Last Name:</label>
          <input
            className="inputbox"
            type="text"
            id="last-name"
            name="last-name"
            placeholder="Enter last name"
            value={last_name}
            onChange={(e) => setLast_Name(e.target.value)}
            pattern="^[a-zA-Z]"
          ></input>
        </div>
        <div className="user ">
          <label for="email">Email:</label>
          <input
            className="inputbox"
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            pattern="^[a-zA-Z0-9]+$"
          ></input>
        </div>
        <div className="user ">
          <label for="password">Password:</label>
          <input
            className="inputbox"
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            pattern="^[a-zA-Z0-9]+$"
          ></input>
        </div>
        <div className="user ">
          <label for="confirm-password">Confirm Password:</label>
          <input
            className="inputbox"
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Confirm password"
            value={confirm_password}
            onChange={(e) => setConfirm_Password(e.target.value)}
            pattern="^[a-zA-Z0-9]+$"
          ></input>
        </div>

        <div className="buttons ">
          <button class="button " onClick={SubmitData} type="submit">
            Submit
          </button>
          <button class="button" onClick={Back} type="button">
            Back
          </button>
        </div>
      </div>
    </div>
  );
};
export default CreateUser;
