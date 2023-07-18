import React from "react";

import NavBar from "./Reusables/NavBar/NavBar";

import black from "../Images/econ.gif";

import earth from "../Images/black.jpg";

import doll from "../Images/doll.jpg";

import "./HomePage.css";

import Roles from "./Reusables/Roles/Roles";

import Carousel from "./Reusables/Carousel/Carousel";

import { useNavigate } from "react-router-dom";




const HomePage = () => {

  const navigate = useNavigate();




  const gotoshop = () => {

    navigate("/shop");

  };

  return (

    <div>

      <NavBar />

      <img className="cartImage" src={black} />

      <div className="exp">

        <h2 className="allinone">Find your E-commerce</h2>

        <h4 className="buysell">

          Empowering Secure and Transparent E-commerce on the Blockchain !

        </h4>

        <button className="viewmoree" onClick={gotoshop}>

          View More

        </button>

      </div>

      <div>

        <br />

        <br />

        <div className="abtcard">

          <Roles />




          <div className="benefits">

            <br />

            <h1>Advantages</h1>

            <p>

              On leveraging our platform, the customer can create his own

              business and get profited{" "}

            </p>




            <div className="bendes">

              <img

                style={{

                  width: "400px",

                  position: "relative",

                  left: "20px",

                  borderRadius: "10px",

                  top: "80px",

                }}

                src={doll}

                alt="image"

              />

              <div style={{ position: "relative", top: "60px" }}>

                <h2 className="bentext">Benefits</h2>

                <div className="linee"></div>

                <div className="lineee"></div>




                <ul>

                  <p

                    style={{

                      textAlign: "left",

                      position: "relative",

                      left: "15px",

                    }}

                  >

                    Various roles available for the customers to take part in

                  </p>

                  <p

                    style={{

                      textAlign: "left",

                      position: "relative",

                      left: "15px",

                    }}

                  >

                    Enabled blockchain technology to increase trust and security

                  </p>

                  <p

                    style={{

                      textAlign: "left",

                      position: "relative",

                      left: "15px",

                    }}

                  >

                    Verifiers verify the products listed on the ecommerce

                    website

                  </p>

                  <p

                    style={{

                      textAlign: "left",

                      position: "relative",

                      left: "15px",

                    }}

                  >

                    Only verified products are present for sale

                  </p>

                </ul>

              </div>

            </div>

          </div>

        </div>

        <br />

        <br />

        <h1 style={{ position: "relative", left: "-398px" }}>

          Ecommerce in our platform

        </h1>

        <div

          style={{ width: "1200px", position: "relative", left: "70px" }}

          className="linee"

        ></div>




        <Carousel />

      </div>

    </div>

  );

};




export default HomePage;