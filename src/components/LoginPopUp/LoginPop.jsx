import React, { useContext, useState } from "react";
import axios from "axios";
import "./LoginPop.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

function LoginPop({ setShowLogin }) {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    try {
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
        toast.success("Login successful", {
          autoClose: 2000, // Close the toast after 2 seconds
        });
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to login");
    }
  };

  return (
    <div>
      <div className="login-pop">
        <form onSubmit={onLogin} action="" className="login-pop-container">
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
              <input
                name="name"
                onChange={onChangeHandler}
                value={data.name}
                type="text"
                placeholder="Your Name"
                required
              />
            )}
            <input
              name="email"
              onChange={onChangeHandler}
              value={data.email}
              type="email"
              placeholder="Your Email"
              required
            />
            <input
              name="password"
              onChange={onChangeHandler}
              value={data.password}
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit">
            {currState === "Sign Up" ? "Create account" : "Login"}
          </button>
          <div className="login-pop-condition">
            <input type="checkbox" required />
            <p>By continuing I agree to the term of use & privacy policy</p>
          </div>
          {currState === "Login" ? (
            <p>
              Create a new account?{" "}
              <span onClick={() => setCurrState("Sign Up")}>Click here</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setCurrState("Login")}>Login here</span>{" "}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default LoginPop;
