import '../styles.css';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function SingleProduct(props) {
    const product = props.product;
    return (

      <Card>
      <Link to={`/product/${product.uid}`}>
        <img
          src={product.image.url}
          className="card-img-top"
          alt={product.title}
          style={{
            width: '300px',
            height: '400px',
            padding: '5px',
          }}
        />
      </Link>
      <Card.Body>
          <Card.Title style={{ color: '#4447e0' }}>{product.title}</Card.Title>

        <Card.Text>${product.product_price}</Card.Text>
        <Row>
          <Col>
              <Button
                variant="outline-primary"
              >
                Add to Cart
              </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
    )
}