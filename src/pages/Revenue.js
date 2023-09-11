import React , { useEffect } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import Axios from "axios";

const Revenue = () => {
    const [marathon, setMarathon] = useState([]);
    useEffect(() => {
      getMarathon();
    }, []);
  
    const getMarathon = async () => {
     
      Axios.get("http://localhost:5000/createmarathons").then((response) => {
        setMarathon(response.data);
      });
    };
  
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Order Total",
        backgroundColor: " deepskyblue",
        data: [70, 100, 200, 700, 400, 300, 500, 900, 600, 200, 800, 250, 1000],
      },
    ],
  };
  return (
    <div>
        <div className="Revenue-h1">
            <h4>Total Order : 5020</h4>
        </div>
         <div className="Audit-input">
            <label className="Audit-lable" >Marathan </label>
                <select className="Audit-inputbox"placeholder="--Select Marathan--">
                    <option >--Select Marathan--</option>
                    {marathon.map((item, index) => (
                    <option >{item.tital}</option>
                    ))}
                </select>
            </div>

    
    <div>
      <Bar data={data} />
    </div>
    </div>
  );
};
export default Revenue;
