import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import "./NavBar.css";
import BizHub from "../../../Images/BizHub.png";

const NavBar = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const navigate = useNavigate();
  const popupRef = useRef(null);
  const popupTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className={`nav-container ${visible ? "visible" : "hidden"}`}>
      <div className="logo">
        <Link to="/">
          <img src={BizHub} alt="Your Logo" className="logo-image" />
        </Link>
      </div>
      <div className="sub-nav">
        <Link to="/">Home</Link>
        <Link to="/marketplace">About</Link>
        <Link to="/shop">Shop</Link>
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
