import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
function Footer() {
  return (
    <div>
      <div className="footer" id="footer">
        <div className="footer-content">
          <div className="fotter-content-left">
            <img src={assets.logo} alt="" className="footer-img" />
            <p>
              Welcome to foodieExpress, where every dish tells a story. Discover
              a world of flavors right at your doorstep. Whether you're craving
              comfort food, exploring new cuisines, or planning a special
              occasion, we're here to make every meal memorable.
            </p>
            <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
          </div>
          <div className="footer-container-center">
            <h2>Company</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-container-right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+21-5846-5632</li>
              <li>contact@foodiexpress.com</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="footer-copyright">
          Copyright 2024 © FoodieExpress.com - All Right Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
