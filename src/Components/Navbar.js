import React from "react";
import { CartIcon } from "../icons";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const Navbar = () => {
  const items = useCart();
  return (
    <nav>
      <div className="nav-center">
        <Link to="/">
          {" "}
          <h2>HOME PAGE</h2>{" "}
        </Link>

        <Link to="/cart">
          <div className="nav-container">
            <CartIcon />
            <div className="amount-container">
              <p className="total-amount">{items.length}</p>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
