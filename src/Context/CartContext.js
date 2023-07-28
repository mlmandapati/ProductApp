import React from "react";
import { useReducer, useContext, createContext } from "react";

export const CartStore = createContext();
//const CartDispatchContext = createContext();

// CartItem Sample JSON
// const cartItem = {
//     id: 1,
//     product: null,
//     quantity: 0,
// }

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      // const newProductWithIndex = { ...action.product, index: action.index };
      // return [...state, newProductWithIndex];
      const newItem = action.payload;
    //   console.log("newItem",newItem);
      const itemExistinCart = state.find(
        (x) => x.id === newItem.id
      );
      const cart = itemExistinCart ?
      state.map((item =>
        item.id === itemExistinCart.id ? newItem : item)) :
        [...state, newItem];
    //console.log("cart",cart);

      return cart;
    case "REMOVE":
    //Remove Item from cart
    const removeItem = action.payload;
    //console.log(removeItem);
    const cartItems = state.filter(
      (item) => item.id !== removeItem
    );
    return cartItems;

    default:
      return state;
  }
};

export function CartProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch};
  return (
      <CartStore.Provider value={value}>
        {props.children}
      </CartStore.Provider>
  );
};

// export const useCart = () => useContext(CartStateContext);
// export const useDispatchCart = () => useContext(CartDispatchContext);
