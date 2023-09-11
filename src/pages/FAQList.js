import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";


const FAQList = () => {
  const [faq, setFaq] = useState([]);
  const [faqtag, setFaqtag] = useState([]);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    getFaq();
    getFaqtag();
  }, []);
  useEffect(() => {
    getData();
  }, [faq, faqtag]);

  const getFaq = async () => {
    Axios.get("http://localhost:5000/faqs").then((response) => {
      setFaq(response.data);
    });
  };
  const getFaqtag = async () => {
    Axios.get("http://localhost:5000/faqtags").then((response) => {
      setFaqtag(response.data);
    });
  };

  const getData = () => {
    const data = faqtag.map((item, index) => { 
      return {...item, ...faq[index] };
    });
    setData(data);
  };

  return (
    <div id="header-faq">
      <div className="userlistbackground">
        <div className="tital-name-faq">
          <h2>Frequently Ask Question</h2>
        </div>
      </div>
      <div className="Audit-select-search">
        <div>
          <label className="Audit-lable">Show</label>
          <select className="Audit-valuse">
            <option value="1">100</option>
            <option value="2">200</option>
            <option value="3">500</option>
            <option value="3">1000</option>
          </select>
        </div>

        <input type="text" class="Audit-Search" placeholder="Search" />
      </div>

      <div className="faq-list-margin">
        <ul className="faq-list-ul">
          <li className="faq-list-list">Sno</li>
          <li className="faq-list-list">Question</li>
          <li className="faq-list-list">Answer</li>
          <li className="faq-list-list">Tags</li>
          <li className="faq-list-list">Action</li>
        </ul>
        <div className="faq-list-ul">
          {data.map((item, index) => (
          <ul>
              <li className="faq-faq-list-list">{index + 1}</li>
              <li className="faq-faq-list-list">{item.question}</li>
              <li className="faq-faq-list-list">{item.answer}</li>
              <li className="faq-faq-list-list">{item.tag}</li>
              </ul>
              ))}
          {/* {faqtag.map((item, index) => (
            <ul>
              <li className="faq-faq-list-list">{item.tag}</li>
              <li className="faq-faq-list-list">{item.image}</li>
            </ul>
          ))} */}
        </div>
      </div>
    </div>
  );
};
export default FAQList;
