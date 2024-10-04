import React, { useContext } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
 const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <h1>Jyotish Sootram</h1>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : " "}
        >
          Home
        </Link>
        <a
          href="#about"
          onClick={() => setMenu("about")}
          className={menu === "about" ? "active" : " "}
        >
          About
        </a>
        <a
          href="#phone-consultation"
          onClick={() => setMenu("phone-consultation")}
          className={menu === "phone-consultation" ? "active" : " "}
        >
        Phone consultation
        </a>
        <a
          href="#testimonials"
          onClick={() => setMenu("testimonials")}
          className={menu === "testimonials" ? "active" : " "}
        >
         Testimonials
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
