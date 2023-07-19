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

          top: "50px",
          columnGap: "70px",
        }}
        className="cards"
      >
        <div class="card">
          <div class="seller-tag">Buyer</div>
          <img className="selimg" src={buyer} alt="" />
          <div class="card__content">
            <p class="card__title">Buyer</p>
            <p class="card__description">
              Being a buyer, a customer can buy any products in the ecommerce
              site.
            </p>
          </div>
        </div>

        <div class="card">
          <div class="seller-tag">Seller</div>
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
          <div class="seller-tag">Verifier</div>
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
