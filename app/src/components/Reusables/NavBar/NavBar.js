import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiUser, FiHeart, FiShoppingCart } from "react-icons/fi";
import "./NavBar.css";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import jwt_decode from "jwt-decode";
import { useCookies } from "react-cookie";
import axios from "axios"

const NavBar = () => {
  const [visible, setVisible] = useState(true);

  const navigate = useNavigate()



  // const tokenn = jwt_decode(cookies.user_token);
  const popupRef = useRef(null);
  const popupTimeout = useRef(null);



  return (
    <nav className={`nav-container ${visible ? "visible" : "hidden"}`}>
      <div className="logo">
        <Link to="/">
          <img  alt="Your Logo" className="logo-image" />
        </Link>
      </div>
      <div className="sub-nav">
        <Link to="/">Home</Link>
        <Link to="/marketplace"> About</Link>
        <Link to="/shop"> Shop</Link>
        {/* <Link to="/adoption">Adoption</Link> */}
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>
          <FiSearch />
        </button>
      </div>
      


    </nav>
  );
};

export default NavBar;
