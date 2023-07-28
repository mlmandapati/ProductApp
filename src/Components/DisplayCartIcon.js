import React from "react";
import { CartIcon } from "../icons";
import { Link } from "react-router-dom";
import { CartStore, useCart } from "../Context/CartContext";
import { useContext } from "react";
import Badge from 'react-bootstrap/Badge';

const DisplayCartIcon = () => {
  // const items = useCart();
  const { state, dispatch } = useContext(CartStore);
  return (

        <Link to="/cart">
          <div className="nav-container">
            <CartIcon />
            <div className="amount-container">
              <p className="total-amount">  
              <Badge pill bg="danger">{state.length > 0 && (

                        state.reduce((a, c) => a + c.quantity, 0)
                    )}</Badge></p>
            </div>
          </div>
        </Link>
  );
};

export default DisplayCartIcon;
