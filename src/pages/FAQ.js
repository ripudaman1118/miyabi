import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

const FAQ = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  
  const AddQueAns = async () => {
    try {
     

      Axios.post("http://localhost:5000/create_faq-que-ans", {
        question: question,
        answer: answer
      
      });

      navigate("/fAQList");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div id="header-faq">
      <div className="userlistbackground">
        <div className="tital-name-faq">
          <h2>Frequently Ask Question</h2>
        </div>
      </div>

      <div className="que">
        <label>Question</label>
        <input className="que-input" placeholder="Enter Question"
         value={question}
         onChange={(e) => setQuestion(e.target.value)}></input>
      </div>
      <div className="ans">
        <label>Answer</label>
        <input className="ans-input" placeholder="Enter Answer"
         value={answer}
         onChange={(e) => setAnswer(e.target.value)}></input>
        <button className="faq-btn"onClick={AddQueAns} >Add</button>
      </div>

      <div className="faq-margin">
        <ul className="faq-ul">
          <li className="faq-list">Sno</li>
          <li className="faq-list">Question</li>
          <li className="faq-list">Answer</li>
          <li className="faq-list">Action</li>
        </ul>
      </div>
    </div>
  );
};
export default FAQ;
