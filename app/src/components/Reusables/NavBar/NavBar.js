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
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopup, setisPopup] = useState(false);
  const [isVerSellPopup, setisVerSellPopup] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies([
    "user_token",
  ]);
  const navigate = useNavigate()

  const handleLogOut = () =>{
    removeCookie("user_token");
window.location.reload()
  }

  // const tokenn = jwt_decode(cookies.user_token);
  const popupRef = useRef(null);
  const popupTimeout = useRef(null);

  const verifypagee = () => {
    navigate("/shop")
  };

  const handleSellVerify = () => {
    Swal({
      title: "Login Required",
      text: "Please log in to sell or verify.",
      icon: "info",
      buttons: true,
      dangerMode: true,
    }).then((willLogin) => {
      if (willLogin) {
        // Redirect to the login page
        window.location.href = "/login";
      }
    });
  };

  const openLogPopup = () => {
    setisPopup(true);
  };

  const closeLogPopup = () => {
    setisPopup(false);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const openVerPopup = () => {
    setisVerSellPopup(true);
  };

  const closeVerPopup = () => {
    setisVerSellPopup(false);
  };

  const handlePopupMouseEnter = () => {
    clearTimeout(popupTimeout.current);
  };

  const handlePopupMouseLeave = () => {
    closePopup();
  };
  const handlePopuppMouseLeave = () => {
    closeLogPopup();
  };
  const handlePopupppMouseLeave = () => {
    closeVerPopup();
  };

  const handleBuyNow = async () => {
    try {
      const tokenn = jwt_decode(cookies.user_token);

      if (tokenn.role === "buyer") {
       console.log("asdasdsad")
        window.location.href = "/cart"
      } else {
        Swal.fire({
          title: "Please Login",
          text: "You need to login to buy ",
          icon: "warning",
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          navigate("/login");
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Please Login",
        text: "You need to login to buy ",
        icon: "warning",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        navigate("/login");
      });
    }
  };

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.get("/allpets", { withCredentials: true });
        const allPets = response.data?.pets ?? [];
        const filteredWishlist = allPets.filter((pet) => pet.isWishlisted === "wishlisted");
        setWishlist(filteredWishlist);
        console.log("wishlist", filteredWishlist);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchWishlist();
  }, [isPopupOpen]);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(
        (prevScrollPos > currentScrollPos && currentScrollPos > 0) ||
          currentScrollPos < 30
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    if (isPopupOpen) {
      popupTimeout.current = setTimeout(() => {
        closePopup();
      }, 3000);

      return () => {
        clearTimeout(popupTimeout.current);
      };
    }
  }, [isPopupOpen]);

  useEffect(() => {
    if (isPopup) {
      popupTimeout.current = setTimeout(() => {
        closeLogPopup();
      }, 3000);

      return () => {
        clearTimeout(popupTimeout.current);
      };
    }
  }, [isPopup]);

  useEffect(() => {
    if (isVerSellPopup) {
      popupTimeout.current = setTimeout(() => {
        closeVerPopup();
      }, 3000);

      return () => {
        clearTimeout(popupTimeout.current);
      };
    }
  }, [isVerSellPopup]);

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
        <Link onClick={verifypagee}> Shop</Link>
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
