import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="header">
        <div className="header-contents">
          <h2>Order your favourite food here.</h2>
          <p className="explore-menu-text">
            Choose from a diverse menu featuring a delectable array of dishes
            crafted to satisfy every palate, from savory appetizers to
            mouth-watering entrees and indulgent desserts, all delivered fresh
            to your doorstep.
          </p>
          <button>View Menu</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
