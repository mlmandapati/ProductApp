import React, {useState} from 'react';
import "../styles.css";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatchCart } from "../Context/CartContext";

export default function ProductBox(props) {
  const product = props.product;

  const dispatch = useDispatchCart();
  const addToCart = (e)  => {
    e.preventDefault();
    console.log("------product", product);
    dispatch({ type: "ADD", product });
  };

  const [showAddToCart, setShowAddToCart] = useState(false);


  const handleOnMouseEnter = () => {
    setShowAddToCart(true);
  }
  const handleOnMouseLeave = () => {
    setShowAddToCart(false);
  }

  return (
    <form  onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
    <a className='product-card__link ss-pointer' style={{textalign:"center", textDecoration:"none"}}>
      <div className="product-card-img-wrap">
        <div className='product-card-img-inner'>
        <Link to={`/product/${product.uid}`}>
          <img src={product.image.url} style={{width:"100%", height:"400px", padding:"1rem", margin:"1rem"}}/>
        </Link>
        </div>
        <div className='product-title' style={{textalign:"center", textDecoration:"none"}}>
         {product.title}
        </div>
        <div className='product-title' style={{textalign:"center", textDecoration:"none"}}>
         ${product.product_price}
        </div>
      </div>
    </a>
    
    {  showAddToCart &&  (<button
         className="button button--full add-to-cart" onClick={addToCart}>
          <span>Add to Cart</span>
      </button>)
}
      
  </form>

    // <Card>
    //  <Link to={`/product/${product.uid}`}>
    //     <img
    //       src={product.image.url}
    //       className="card-img-top"
    //       alt={product.title}
    //       style={{
    //         width: "100%",
    //         height: "400px",
    //         padding: "5px",
    //       }}
    //     />
    //   </Link>
    //   <Card.Body>
    //     <Card.Title style={{ color: "#4447e0" }}>{product.title}</Card.Title>

    //     <Card.Text>${product.product_price}</Card.Text>
    //     <Row>
    //       <Col>
    //         <Button
    //           variant="outline-primary"
    //           onClick={() => addToCart(product)}
    //         >
    //           Add to Cart
    //         </Button>
    //       </Col>
    //     </Row>
    //   </Card.Body>
    // </Card>
  );
}
