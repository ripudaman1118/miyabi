import React, { useEffect }  from "react";
import { useState } from "react";
import Axios from "axios";

const Coupons = () => {
    const [marathon, setMarathon] = useState([]);
    const [coupon, setCoupons] = useState([]);
    const [user, setUsers] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
      getMarathon();
      getCoupons();
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
    const getCoupons = async () => {
   
        Axios.get("http://localhost:5000/createcoupons").then((response) => {
            setCoupons(response.data);
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
       <div id="header-coupons">
             <div className="Audit-Logs">
             <div className="Audit-input">
            <label className="Audit-lable" >Marathan </label>
            <select className="Audit-inputbox"placeholder="--Select Marathan--">
                    <option >--Select Marathan--</option>
                    {marathon.map((item, index) => (
                    <option >{item.tital}</option>
                    ))}
                </select>
            </div>
            <div className="Audit-select-search">
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
    )
}
export default Coupons;