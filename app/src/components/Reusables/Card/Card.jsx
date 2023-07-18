import React from "react";
import "./Card.css";
import carsvalley from "./Logo/cars-valley.png";
import vastra from "./Logo/vastra.png";
import block from "./Logo/blocklisting.png";
import art from "./Logo/Artchain.png";
import realchain from "./Logo/realchain.png";
import petchain from "./Logo/petchain.png";
import verified from "./Logo/verified.png";
import thrustshop from "./Logo/thrustshop.png";

function Card() {
  return (
    <div className="allapp">
      {/* <h3>Our Applications</h3> */}
      <div className="allcarddiv">
        <div className="card">
          <img className="siteimage" src={carsvalley} alt="" />
          <div className="content">
            <p className="desc">
              Cars Valley, the blockchain-based solution for buying and selling
              secondhand cars. With blockchain technology, we provide enhanced
              security, transparency, and trust for our users.
            </p>
            <a className="action" href="#">
              Visit Site
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className=" card">
          <img className="siteimage" src={block} alt="" />
          <div className="content">
            <p className="desc">
              A blockchain-powered marketplace for verified business listings,
              ensuring trust and transparency.
            </p>
            <a className="action" href="#">
              Visit Site
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className=" card">
          <img className="siteimage" src={vastra} alt="" />
          <div className="content">
            <p className="desc">
              Vasthra aims to create a trusted platform where only verified and
              authentic Kanchipuram silk sarees are traded.
            </p>
            <a className="action" href="#">
              Visit Site
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className=" card">
          <img className="siteimage" src={art} alt="" />
          <div className="content">
            <p className="desc"></p>
            <a className="action" href="#">
              Visit Site
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className=" card">
          <img className="siteimage" src={realchain} alt="" />
          <div className="content">
            <p className="desc"></p>
            <a className="action" href="#">
              Visit Site
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className=" card">
          <img className="siteimage" src={petchain} alt="" />
          <div className="content">
            <p className="desc">
              A secure blockchain-based platform for buying and selling pets.
              Verifiers ensure pet authenticity, while blockchain records
              verified pet data
            </p>
            <a className="action" href="#">
              Visit Site
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className=" card">
          <img className="siteimage" src={verified} alt="" />
          <div className="content">
            <p className="desc">
              Verified Careers: Your gateway to trusted job opportunities. Say
              goodbye to fake jobs and hello to verified employment. Join the
              revolution for a future of trust and success. Get hired with
              certainty, only on "Verified Careers.
            </p>
            <a className="action" href="#">
              Visit Site
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className=" card">
          <img className="siteimage" src={thrustshop} alt="" />
          <div className="content">
            <p className="desc">
              It provides a centralized hub for buying and selling bikes,
              accessing bike-related information, connecting with local biking
              communities, and exploring biking events and trails.
            </p>
            <a className="action" href="#">
              Visit Site
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
