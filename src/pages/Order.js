import React, { useEffect }  from "react";
import { useState } from "react";
import Axios from "axios"

const Order = () => {
    const [marathon, setMarathon] = useState([]);
    useEffect(() => {
      getMarathon();
    }, []);
  
    const getMarathon = async () => {
     
      Axios.get("http://localhost:5000/createmarathons").then((response) => {
        setMarathon(response.data);
      });
    };
  
    return (
        <div id="header">
        <div className="Audit-Logs">
        <div className="Audit-input">
       <label className="Audit-lable" >Marathan </label>
           <select className="Audit-inputbox">
               <option value="" >--Select Marathan--</option>
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
       <div className="coupons=list">
           <ul className="Order-ul">
               <li className="coupons">Sno</li>
               <li className="coupons">Order number</li>
               <li className="coupons">Transaction id</li>
               <li className="coupons">Coupons</li>
               <li className="coupons">Transaction amount</li>
               <li className="coupons">Status</li>
               <li className="coupons">Order active</li>
               <li className="coupons">Title</li>
               <li className="coupons">FullName</li>
               <li className="coupons">Email</li> 	
               <li className="coupons">	payment gatewa</li>
               <li className="coupons">Transaction date</li>
               <li className="coupons">Order transaction </li>
           </ul>
       
       </div>
      

   </div>
   </div> 
    )
}
export default Order;