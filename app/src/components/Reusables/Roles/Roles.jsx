import React, { useState } from 'react';
import './Roles.css';
import doll from '../../../Images/doll.jpg';

const Roles = () => {
  const [activePopupIndex, setActivePopupIndex] = useState(null);

  const handleCardClick = (index) => {
    setActivePopupIndex(index);
  };

  const handleClosePopup = () => {
    setActivePopupIndex(null);
  };

  return (
    <div >
      <div style={{display:"flex", flexDirection:"coloumn", position:"relative",left:"40px", top:"-100px", columnGap:"70px"}} className="cards">
        <div
          className={`card red ${activePopupIndex === 0 ? 'show-popup' : ''}`}
          onClick={() => handleCardClick(0)}
        >
          <div className="first-content">
            <img style={{ width: '300px', position:"relative", top:"-60px", left:"52px" }} src={doll} alt="Buyer" />
            <h3 style={{position:"relative", top:"100px", left:"-150px"}}>Buyer</h3>
          </div>
          <div className="second-content">
            <h6>Being a buyer, a buyer can buy any products in the ecommerce site</h6>
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
            <h6>Being a buyer, a buyer can buy any products in the ecommerce site</h6>
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
            <h6>Being a buyer, a buyer can buy any products in the ecommerce site</h6>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Roles;
