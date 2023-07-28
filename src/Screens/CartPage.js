import { CartStore, useCart, useDispatchCart } from "../Context/CartContext";
import CartItem from "../Components/CartItem";
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function CartPage() {
  // const items = useCart();
  // console.log(items);
  // const dispatch = useDispatchCart();

  const { state, dispatch } = useContext(CartStore);

  const handleRemove = (index) => {
    // e.preventDefault();
    dispatch({
      type: 'REMOVE',
      payload: index,
    });
  };
  const updateCartHandler = async (id, product, quantity) => {
    dispatch({
      type: 'ADD',
      payload: { id, product, quantity },
    });
  };


  if (state.length === 0) {
    return (
      <main>
        <div className="empty-cart">
          <h2>Your Shopping Cart is Empty</h2>
          <p>You have no items in your shopping cart. Start adding some!</p>
        </div>
      </main>
    );
  }

  return (
    // <Container>
    //   <Row>
    //     {state.map((item, index) => (
    //       <Col
    //         md={3}
    //         className="mb-3"
    //         // key={index}
    //       >
    //         <CartItem
    //           product={item.product}
    //           quantity={item.quantity}
    //           index={item.id}
    //         />
    //       </Col>
    //     ))}
    //   </Row>
    // </Container>
    <Container>
    <Helmet>
      <title>Shopping Cart</title>
    </Helmet>
    <h1>Shopping Cart</h1>
    <Row>
      <Col md={8}>
          <ListGroup>
            {state.map((item) => (
              <ListGroup.Item key={item.id}>
                <Row className="align-items-center">
                  <Col md={5}>
                  {item.product.image ? (
              <img
                src={item.product.image.url}
                alt={item.product.title}
                className="img-fluid rounded img-thumbnail"
                style={{
                  width: '100px',
                  height: '100px',
                }}
              />
            ) : (
              <img
              src={item.product.imageConnection.edges?.[0].node.url}
              alt={item.product.title}
              className="img-fluid rounded img-thumbnail"
              style={{
                width: '100px',
                height: '100px',
              }}
              />
            )}{' '}
                    <Link to={`/product/${item.id}`}>{item.product.title}</Link>
                  </Col>
                  <Col md={3}>
                    <Button
                      variant="light"
                      onClick={() =>
                        updateCartHandler(item.id, item.product, item.quantity - 1)
                      }
                      disabled={item.quantity === 1}
                    >
                      <i className="fas fa-minus-circle"></i>
                    </Button>{' '}
                    <span>{item.quantity}</span>{' '}
                    <Button
                      variant="light"
                      onClick={() =>
                        updateCartHandler(item.id, item.product, item.quantity + 1)
                      }
                    >
                      <i className="fas fa-plus-circle"></i>
                    </Button>
                  </Col>
                  <Col md={2}>${item.product.product_price}</Col>
                  <Col md={2}>
                    <Button
                      variant="light"
                      onClick={() => handleRemove(item.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>
                  Subtotal ({state.reduce((a, c) => a + c.quantity, 0)}{' '}
                  items: $
                  {Math.floor(
                    state.reduce((a, c) => a + c.product.product_price * c.quantity, 0)
                  )}
                  )
                </h3>
              </ListGroup.Item>

              <ListGroup.Item>
                <div className="d-grid">
                  <Button
                    variant="outline-primary"
                  >
                    Proceed to Checkout
                  </Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  );
}
