import React, { useState } from "react";
import "./Roles.css";
import doll from "../../../Images/doll.jpg";
import seller from "./seller.jpg";
import buyer from "./buyer.jpg";
import verifier from "./verifier.jpg";

const Roles = () => {
  const [activePopupIndex, setActivePopupIndex] = useState(null);

  const handleCardClick = (index) => {
    setActivePopupIndex(index);
  };

  const handleClosePopup = () => {
    setActivePopupIndex(null);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "coloumn",
          position: "relative",
          left: "40px",
          // top: "-100px",
          top: "50px",
          columnGap: "70px",
        }}
        className="cards"
      >
        {/* <div
          className={`card red ${activePopupIndex === 0 ? 'show-popup' : ''}`}
          onClick={() => handleCardClick(0)}
        >
          <div className="first-content">
            <img style={{ width: '300px', position:"relative", top:"-60px", left:"52px" }} src={doll} alt="Buyer" />
            <h3 style={{position:"relative", top:"100px", left:"-150px"}}>Buyer</h3>
          </div>
          <div className="second-content">
            <h6>Being a buyer, a customer can buy any products in the ecommerce site</h6>
          </div>
         
        </div>
        <div
          className={`card`}
        >
          <div className="first-content">
            <img style={{ width: '300px', position:"relative", top:"-60px", left:"52px" }} src={doll} alt="Buyer" />
            <h3 style={{position:"relative", top:"100px", left:"-150px"}}>Seller</h3>
          </div>
          <div className="second-content">
            <h6>Being a Seller, a customer can sell any products in the ecommerce site</h6>
          </div>
          
        </div>
        <div
          className={`card`}
        >
           <div className="first-content">
            <img style={{ width: '300px', position:"relative", top:"-60px", left:"62px" }} src={doll} alt="Buyer" />
            <h3 style={{position:"relative", top:"100px", left:"-150px"}}>Verifier</h3>
          </div>
          <div className="second-content">
            <h6>Being a verifier, a customer can verify any products in the ecommerce site</h6>
          </div>
         
        </div> */}
        <div class="card">
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
          </svg> */}
          <img className="selimg" src={buyer} alt="" />
          {/* <p class="card__title">Buyer</p> */}
          <div class="card__content">
            <p class="card__title">Buyer</p>
            <p class="card__description">
              Being a buyer, a customer can buy any products in the ecommerce
              site.
            </p>
          </div>
        </div>

        <div class="card">
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
          </svg> */}
          <img className="selimg" src={seller} alt="" />

          <div class="card__content">
            <p class="card__title">Seller</p>
            <p class="card__description">
              Being a Seller, a customer can sell any products in the ecommerce
              site.
            </p>
          </div>
        </div>

        <div class="card">
          <img className="selimg" src={verifier} alt="" />

          <div class="card__content">
            <p class="card__title">Verifier</p>
            <p class="card__description">
              Being a verifier, a customer can verify any products in the
              ecommerce site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roles;
