import React, { useEffect }  from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

const FAQTags = () => {
  const [tag, setTag] = useState("");
  const navigate = useNavigate();

  const CreateTag = async () => {
    try {
      Axios.post("http://localhost:5000/create_faqtag", {
        tag: tag
      });

      navigate("/fAQTags");
    } catch (error) {
      console.error("Error:", error);

    }
  };

  const [faqtag, setFaqtag] = useState([]);
  useEffect(() => {
    getFaqtag();
  }, []);

  const getFaqtag = async () => {
   
    Axios.get("http://localhost:5000/faqtags").then((response) => {
      setFaqtag(response.data);
    });

  };
    return (
        <div id="header-faq">
        
        <div className="userlistbackground">
        <div className="tital-name-faq-tags">
          <h2>Create Frequently Asked Question Tags</h2>
        </div>
      </div>

        <div className="faq-tags-btn-right">
            <button className="faq-tags-btn" onClick={CreateTag}>CREATE</button>
        </div>

        <div className="faq-tags-input">  
          <h3>Tag</h3>
          <input className="faq-input" 
          value={tag}
          onChange={(e) => setTag(e.target.value)}></input>
          </div>



        <div className="faq-tags-select-search">
                <div>
                    <label className="Audit-lable">Show</label>
                    <select className="Audit-valuse" > 
                        <option value="1">100</option>
                        <option value="2">200</option>
                        <option value="3">500</option>
                        <option value="3">1000</option>

                    </select>
                </div>

                <input type="text" class="Audit-Search" placeholder="Search" />

            </div>
        
  
        <div className="faq-tags-margin">
          <ul className="faq-tags-ul">
            <li className="faq-tags-list">Sno</li>
            <li className="faq-tags-list">Tags</li>
            <li className="faq-tags-list">Active</li>
          </ul>
          <div className="course-list-list-margin">
            {faqtag.map((item, index) => (
              <ul>
                <li className="faq-tags-list-list">{index + 1}</li>
                <li className="faq-tags-list-list">{item.tag}</li>
                <li className="faq-tags-list-list">{item.action}</li>
              
              </ul>
            ))}
          </div>
        </div>
      </div>
    )
}
export default FAQTags;