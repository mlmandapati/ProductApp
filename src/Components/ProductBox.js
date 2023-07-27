import React, { useState } from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import { useDispatchCart } from "../Context/CartContext";

export default function ProductBox(props) {
  const product = props.product;

  const dispatch = useDispatchCart();
  const addToCart = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD", product });
  };

  const [showAddToCart, setShowAddToCart] = useState(false);

  const handleOnMouseEnter = () => {
    setShowAddToCart(true);
  };
  const handleOnMouseLeave = () => {
    setShowAddToCart(false);
  };

  const renderStars = () => {
    const rating = props.product.rating;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    const stars = [];

    // Render full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i}>&#9733;</span>);
    }

    // Render half star if applicable
    if (hasHalfStar) {
      stars.push(<span key={fullStars}>&#9733;&#189;</span>);
    }

    // Render empty stars to fill up the remaining
    for (let i = stars.length; i < 5; i++) {
      stars.push(<span key={i}>&#9734;</span>);
    }

    return stars;
  };


  return (
    <form
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <a
        className="product-card__link ss-pointer"
        style={{ textalign: "center", textDecoration: "none" }}
      >
        <div className="product-card-img-wrap">
          <div className="product-card-img-inner">
            <Link to={`/product/${product.uid}`}>
              <img
                src={product.image.url}
                style={{ width: "100%", height: "400px", padding: "8px" }}
              />
            </Link>
          </div>
          <div
            className="product-title"
            style={{ textalign: "center", textDecoration: "none" }}
          >
            {product.title}
          </div>
          <div
            className="product-title"
            style={{ textalign: "center", textDecoration: "none" }}
          >
            ${product.product_price}
          </div>
        </div>
        <div className="star-rating" style={{ textAlign: "center" }}>{renderStars()}</div>
    </a>
    
    {  showAddToCart &&  (<button
         className="button button--full add-to-cart"  onClick={addToCart}>
          <span>Add to Cart</span>
      </button>)
    }
      
  </form>
  );
}
