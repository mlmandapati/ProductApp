import "../styles.css";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatchCart } from "../Context/CartContext";

export default function SingleProduct(props) {
  const product = props.product;

  const dispatch = useDispatchCart();
  const addToCart = (product) => {
    console.log("------product", product);
    dispatch({ type: "ADD", product });
  };

  return (
    <Card>
      <Link to={`/product/${product.uid}`}>
        <img
          src={product.image.url}
          className="card-img-top"
          alt={product.title}
          style={{
            width: "300px",
            height: "400px",
            padding: "5px",
          }}
        />
      </Link>
      <Card.Body>
        <Card.Title style={{ color: "#4447e0" }}>{product.title}</Card.Title>

        <Card.Text>${product.product_price}</Card.Text>
        <Row>
          <Col>
            <Button
              variant="outline-primary"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
