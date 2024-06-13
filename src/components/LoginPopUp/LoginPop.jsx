import React, { useState } from "react";
import "./LoginPop.css";
import { assets } from "../../assets/assets";
function LoginPop({ setShowLogin }) {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div>
      <div className="login-pop">
        <form action="" className="login-pop-container">
          <div className="login-pop-title">
            <h2>{currState}</h2>
            <img
              src={assets.cross_icon}
              onClick={() => setShowLogin(false)}
              alt=""
            />
          </div>
          <div className="login-pop-input">
            {currState === "Login" ? (
              <></>
            ) : (
              <input type="text" placeholder="Your Name" required />
            )}
            <input type="email" placeholder="Your Email" required />
            <input type="password" placeholder="Password" required />
          </div>
          <button>
            {" "}
            {currState === "Sign Up" ? "Create account" : "Login"}
          </button>
          <div className="login-pop-condition">
            <input type="checkbox" required />
            <p>By continuing I agreee to the term of use & privacy policy</p>
          </div>
          {currState === "Login" ? (
            <p>
              Create a new account?{" "}
              <span onClick={() => setCurrState("Sign Up")}>Click here</span>
            </p>
          ) : (
            <p>
              Already have an acccount?{" "}
              <span onClick={() => setCurrState("Login")}>Login here </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default LoginPop;
