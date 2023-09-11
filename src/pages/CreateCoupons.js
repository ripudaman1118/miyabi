import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateCoupons = () => {
  const [coupons, setCoupons] = useState("");
  const [create_date, setCreate_date] = useState("");
  const [discount, setDiscount] = useState("");
  const [discount_type, setDiscount_type] = useState("");
  const [marathon_name, setMarathon_name] = useState("");
  const [order_number, setOrder_number] = useState("");
  const [number_of_uses, setNumber_of_uses] = useState("");
  const [consumed_count, setConsumed_count] = useState("");
  const [valid, setValid] = useState("");
  const navigate = useNavigate();
  const [marathon, setMarathon] = useState([]);
  const [coupon, setCoupon] = useState([]);
  const [user, setUsers] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    getMarathon();
    getCoupon();
    getUser();
  }, []);
  useEffect(() => {
    getData();
  }, [coupon, user]);

  const getMarathon = async () => {
    Axios.get("http://localhost:5000/createmarathons").then((response) => {
      setMarathon(response.data);
    });
  };
 

  const SubmitData = async () => {
    try {
      Axios.post("http://localhost:5000/create_coupon", {
        coupons:coupons,
        create_date:create_date,
        discount: discount,
        discount_type:discount_type,
        marathon_name: marathon_name,
        order_number: order_number,
        number_of_uses: number_of_uses,
        consumed_count: consumed_count,
        valid: valid
      });
      navigate("/coupons");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const getCoupon = async () => {
   
    Axios.get("http://localhost:5000/createcoupons").then((response) => {
        setCoupon(response.data);
    });

  };
  const getUser = async () => {
   
    Axios.get("http://localhost:5000/users").then((response) => {
      setUsers(response.data);
    });

  };
  const getData = () => {
    const data = coupon.map((item, index) => { 
      return {...item, ...user[index] };
    });
    setData(data);
  };
  return (
    <div id="CreateCoupons-header">
      <div>
        <div>
          <div className="Mandatory-fields">
            <h1>Mandatory</h1>
            <h1>fields</h1>
          </div>
          <label className="CreateCoupons-lable">Discount type:*</label>
          <select
            className="CreateCoupons-valuse"
            value={discount_type}
            onChange={(e) => setDiscount_type(e.target.value)}
          >
            <option>Amount</option>
            <option>Percentage</option>
          </select>
        </div>
        <div>
          <label className="CreateCoupons-lable">Discount Percentage:*</label>
          <input className="CreateCoupons-valuse" type="number"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          ></input>
        </div>
        <div>
          <label className="CreateCoupons-lable">Number of user:*</label>
          <input className="CreateCoupons-valuse" type="number"
           value={number_of_uses}
           onChange={(e) => setNumber_of_uses(e.target.value)}
          ></input>
        </div>
        <div className="Optional-fields">
          <h1>Optional</h1>
          <h1>fields</h1>
        </div>
        <div>
          <label className="CreateCoupons-lable">Coupon Code:</label>
          <input className="CreateCoupons-valuse" type="text"
           value={coupons}
           onChange={(e) => setCoupons(e.target.value)}
          ></input>
        </div>

        <div className="CreateCoupons-date-display">
          <div>
            <label className="CreateCoupons-lable">Start Date:</label>
            <input className="CreateCoupons-date" type="date"
             value={create_date}
             onChange={(e) => setCreate_date(e.target.value)}
            ></input>
          </div>
          <div>
            <label className="CreateCoupons-lable">End Date:</label>
            <input className="CreateCoupons-date" type="date"></input>
          </div>
        </div>

        <div>
          <label className="CreateCoupons-lable">Marathon :</label>
          <select className="CreateCoupons-valuse"
            value={marathon_name}
            onChange={(e) => setMarathon_name(e.target.value)}
          >
            <option value="">--Select Marathan--</option>
            {marathon.map((item, index) => (
              <option>{item.tital}</option>
            ))}
          </select>
        </div>

        <button className="CreateCoupons-btn" onClick={SubmitData}>
          SUBMIT
        </button>
      </div>

      <div className="Audit-Logs">
        <div className="Audit-input">
          <label className="Audit-lable">Marathan </label>
          <select className="Audit-inputbox"
          >
            <option >--Select Marathan--</option>
            {marathon.map((item, index) => (
              <option>{item.tital}</option>
            ))}
          </select>
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
        <div className="coupons-overflow">
                <ul className="coupons-ul">
                    <li className="coupons">Sno</li>
                    <li className="coupons">Email</li>
                    <li className="coupons">Coupons</li>
                    <li className="coupons">CreateDate</li>
                    <li className="coupons">Discount</li>
                    <li className="coupons">DiscountType</li>
                    <li className="coupons">MarathonName</li>
                    <li className="coupons">OrderNumber</li>
                    <li className="coupons">NumberOfUses</li> 	
                    <li className="coupons">ConsumedCount</li>
                    <li className="coupons">Valid</li>
                </ul>
                <div >
            {data.map((item, index) => (
              <ul className="coupons-ul">
                <li className="coupons-data-list">{index + 1}</li>
                <li className="coupons-data-list">{item.email}</li>
                <li className="coupons-data-list">{item.coupons}</li>
                <li className="coupons-data-list">{item.create_date }</li>
                <li className="coupons-data-list">{item.discount}</li>
                <li className="coupons-data-list">{item.discount_type}</li>
                <li className="coupons-data-list">{item.marathon_name}</li>
                <li className="coupons-data-list">0</li>
                <li className="coupons-data-list">{item.number_of_uses}</li>
                <li className="coupons-data-list">{item.consumed_count}</li>
                <li className="coupons-data-list">{item.valid}</li>
               
              </ul>
            ))}
          </div>
            </div>
      </div>
    </div>
  );
};
export default CreateCoupons;
