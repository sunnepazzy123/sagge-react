import React from "react";
import "./Navbar.css";
import avatar from "./Images/avatar2.jpg";
import { NavDropdown } from "react-bootstrap";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>LOGO</h1>
      <a href="#">Dashboard</a>
      <a href="#">Employees</a>
      <a href="#">Reports & Insights</a>
      <a href="#">Tools</a>
      <NavDropdown
        title={
          <div>
            <img src={avatar} className="nav-image dropdown-toggle::after" />
          </div>
        }
      >
        <NavDropdown.Item className="dropdown-link" href="#action3">
          My Profile
        </NavDropdown.Item>
        <NavDropdown.Item className="dropdown-link" href="#action4">
          Change settings of your account.
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item className="dropdown-link" href="#action5">
          Logout
        </NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};

export default Navbar;
