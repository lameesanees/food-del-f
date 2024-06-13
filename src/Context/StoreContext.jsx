import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (cartItems[itemId]) {
      setCartItems((prevCartItems) => ({
        ...prevCartItems,
        [itemId]: prevCartItems[itemId] + 1
      }));
    } else {
      setCartItems((prevCartItems) => ({
        ...prevCartItems,
        [itemId]: 1
      }));
    }
  };

  const removeFromCart = (itemId) => {
    if (cartItems[itemId] === 1) {
      const newCartItems = { ...cartItems };
      delete newCartItems[itemId];
      setCartItems(newCartItems);
    } else if (cartItems[itemId] > 1) {
      setCartItems((prevCartItems) => ({
        ...prevCartItems,
        [itemId]: prevCartItems[itemId] - 1
      }));
    }
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    addToCart,
    removeFromCart,
    cartItems,
    setCartItems,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
