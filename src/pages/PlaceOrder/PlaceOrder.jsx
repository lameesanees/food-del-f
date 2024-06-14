import React, { useContext, useEffect, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PlaceOrder() {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);
  const [data, setData] = useState({
    firstname: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = { ...item, quantity: cartItems[item._id] };
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else {
      if (getTotalCartAmount() === 0) {
        navigate("/cart");
      }
    }
  }, [token]);
  return (
    <div>
      <form onSubmit={placeOrder} className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input
              required
              name="firstname"
              onChange={onChangeHandler}
              value={data.firstname}
              placeholder="First name"
            />
            <input
              required
              onChange={onChangeHandler}
              value={data.lastName}
              type="text"
              placeholder="Last name"
              name="lastName"
            />
          </div>
          <input
            required
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Email address"
            name="email"
          />
          <input
            required
            onChange={onChangeHandler}
            value={data.street}
            type="text"
            placeholder="Street"
            name="street"
          />
          <div className="multi-fields">
            <input
              required
              onChange={onChangeHandler}
              value={data.city}
              type="text"
              placeholder="City"
              name="city"
            />
            <input
              required
              onChange={onChangeHandler}
              value={data.state}
              type="text"
              placeholder="State"
              name="state"
            />
          </div>
          <div className="multi-fields">
            <input
              required
              onChange={onChangeHandler}
              value={data.zipcode}
              type="text"
              placeholder="Zip code"
              name="zipcode"
            />
            <input
              required
              onChange={onChangeHandler}
              value={data.country}
              type="text"
              placeholder="Country"
              name="country"
            />
          </div>
          <input
            required
            onChange={onChangeHandler}
            value={data.phone}
            type="text"
            name="phone"
            placeholder="Phone"
          />
        </div>

        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>
                  ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
                </b>
              </div>
            </div>
            <button type="submit">Proceed to checkout</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PlaceOrder;
