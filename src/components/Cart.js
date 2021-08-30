import React, { createContext, useEffect, useReducer, useState } from "react";
import "./cart.css";
import { products } from "./Products.js";
import { reducer } from "./Reducer";
import ContextCart from "./ContextCart";

export const CartContext = createContext();

const initialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0,
};

const Cart = () => {
  // const [items, setItems] = useState(products);
  const [state, dispatch] = useReducer(reducer, initialState);
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  };

  // increment type
  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  //decrement
  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  //we will use useEffet to update the data

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    // console.log("Awesome");
  }, [state.item]);
  return (
    <div>
      <CartContext.Provider
        value={{ ...state, removeItem, clearCart, increment, decrement }}
      >
        <ContextCart />
      </CartContext.Provider>
    </div>
  );
};

export default Cart;
