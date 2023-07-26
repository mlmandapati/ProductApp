import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatchCart } from "../Context/CartContext";

export default function ProductDetails() {
  const params = useParams();
  const { id } = params;
  const contentTypeId = "product_";
  const entryUid = id;
  const environmentName = "preview";

  //url to fetch the recepies

  const url = `https://cdn.contentstack.io/v3/content_types/${contentTypeId}/entries/${entryUid}?environment=${environmentName}`;

  const [content, setContent] = useState();

  const options = {
    method: "GET",
    headers: {
      api_key: "blt3815e63116cffb83",
      access_token: "cs8db86493b65d47aa5ee93e0e",
      "Content-Type": "application/json",
    },
  };

  async function getSingleEntry() {
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      const parsedResult = JSON.parse(result);
      setContent(parsedResult);
      // console.log("Single Entry response", parsedResult);
      // const parsedResult = JSON.parse(result);
      // setData(parsedResult.results);
      // console.log("after fetch", data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSingleEntry();
  }, [entryUid, contentTypeId]);

  const dispatch = useDispatchCart();
  const addToCart = (product) => {
    console.log("------product", product);
    dispatch({ type: "ADD", product });
  };

  return (
    <Container>
      <br/>
      {content && (
        <Row>
          <Col md={6}>
            <img
              src={content.entry.image.url}
              alt={content.entry.title}
              style={{
                width: "100%",
                height: "500px",
                padding: "5px",
              }}
            ></img>
          </Col>
          <Col md={6}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h1>{content.entry.title}</h1>
              </ListGroup.Item>
              <ListGroup.Item>
                Price: ${content.entry.product_price}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Description:</strong>
                <p>{content.entry.description}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  variant="outline-primary"
                  onClick={() => {
                    addToCart(content.entry);
                  }}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </Container>
  );
}
