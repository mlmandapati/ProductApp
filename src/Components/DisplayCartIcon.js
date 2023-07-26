import React from "react";
import { CartIcon } from "../icons";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const DisplayCartIcon = () => {
  const items = useCart();
  return (

        <Link to="/cart">
          <div className="nav-container">
            <CartIcon />
            <div className="amount-container">
              <p className="total-amount">{items.length}</p>
            </div>
          </div>
        </Link>
  );
};

export default DisplayCartIcon;
