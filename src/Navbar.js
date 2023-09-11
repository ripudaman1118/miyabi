import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  FaUserAlt,
  FaMap,
  FaHistory,
  FaTrophy,
  FaGift,
  FaBookReader,
  FaChartPie,
  FaListAlt,
  FaChild,
  FaQuestionCircle,
  FaComments,
  FaList,
  FaTasks,
  FaBars,
  FaExclamationTriangle,
  FaLanguage,
  FaBell,
  FaTruck,
  FaMoneyBillAlt,
  FaLocationArrow,
  FaUserSecret,
  FaSignOutAlt,
} from "react-icons/fa";
const Navbar = ({ children }) => {
  const menu = [
    {
      path: "/",
      name: "Admin User",
      icon: <FaUserAlt />,
    },
    {
      path: "/appSettings",
      name: "App Settings",
      icon: <FaMap />,
    },
    {
      path: "/auditLogs",
      name: "Audit Logs",
      icon: <FaHistory />,
    },

    {
      path: "/contest",
      name: "Contest",
      icon: <FaTrophy />,
    },
    {
      path: "/contestRules",
      name: "Contest Rules",
      icon: <FaTrophy />,
    },
    {
      path: "/coupons",
      name: "Coupons",
      icon: <FaGift />,
    },
    {
      path: "/course",
      name: "Course",
      icon: <FaBookReader />,
    },
    {
      path: "/createCoupons",
      name: "Create Coupan",
      icon: <FaGift />,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaChartPie />,
    },
    {
      path: "/dayCategory",
      name: "Day Category",
      icon: <FaListAlt />,
    },
    {
      path: "/exercise",
      name: "Exercise",
      icon: <FaChild />,
    },
    {
      path: "/fAQ",
      name: "FAQ",
      icon: <FaQuestionCircle />,
    },
    {
      path: "/fAQList",
      name: "FAQ LIST",
      icon: <FaQuestionCircle />,
    },
    {
      path: "/fAQTags",
      name: "FAQ Tags",
      icon: <FaQuestionCircle />,
    },
    {
      path: "/feedback",
      name: "Feedback",
      icon: <FaComments />,
    },
    {
      path: "/greatExtension",
      name: "Greate Extension",
      icon: <FaList />,
    },
    {
      path: "/gxCourse",
      name: "Gx Course",
      icon: <FaBookReader />,
    },
    {
      path: "/manageComments",
      name: "Manage Comments",
      icon: <FaComments />,
    },
    {
      path: "/manageExtention",
      name: "Manage Extention",
      icon: <FaList />,
    },
    {
      path: "manageMarathon",
      name: "Manage Marathon",
      icon: <FaTasks />,
    },
    {
      path: "/manageUsers",
      name: "Manage Users",
      icon: <FaUserAlt />,
    },
    {
      path: "/modules",
      name: "Modules",
      icon: <FaBars />,
    },
    {
      path: "/multiError",
      name: "Multi Error",
      icon: <FaExclamationTriangle />,
    },
    {
      path: "/multiLanguage",
      name: "Multi Language",
      icon: <FaLanguage />,
    },
    {
      path: "/notifications",
      name: "Notifications",
      icon: <FaBell />,
    },
    {
      path: "/order",
      name: "Order",
      icon: <FaTruck />,
    },
    {
      path: "/profile",
      name: "Profile",
      icon: <FaUserAlt />,
    },
    {
      path: "/revenue",
      name: "Revenue",
      icon: <FaMoneyBillAlt />,
    },

    {
      path: "/userSessionLogs",
      name: "User Session Logs",
      icon: <FaLocationArrow />,
    },
    {
      path: "/userPrivilege",
      name: "User Privilege",
      icon: <FaUserSecret />,
    },
    {
      path: "/logOut",
      name: "Log Out",
      icon: <FaSignOutAlt />,
    },
    
  ];
  
  return (
   
        <div className="container">
      <div className="slaid">
        <div className="top_section">
          <h3>Miyabi Admin</h3>
        </div>
        {menu.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="menu"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div className="menu_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>
        {children}
        <div className="footer-1">
          <div className="footer-2">
            <footer>
              <p>© 2018 Copyright</p>
            </footer>
          </div>
        </div>
      </main>
    </div>
    
  );
};

export default Navbar;
