import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="text-center">All Right Reserved &copy; Techinfoyt</h1>
      <p className="text-center mt-3">
        <NavLink
          to="/about"
          activeStyle={{ borderBottom: "2px solid #000" }}
        >
          About
        </NavLink> | 
        <NavLink
          to="/contact"
          activeStyle={{ borderBottom: "2px solid #000" }}
        >
          Contact
        </NavLink> | 
        <NavLink
          to="/policy"
          activeStyle={{ borderBottom: "2px solid #000" }}
        >
          Privacy Policy
        </NavLink>
      </p>
    </div>
  );
};

export default Footer;
