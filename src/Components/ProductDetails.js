import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatchCart } from "../Context/CartContext";
<<<<<<< HEAD
import { Helmet } from 'react-helmet';
=======
import ReadOutLout from "./ReadOutLout";
>>>>>>> 6711ca6b0363cc2ac4ef8f71c60baa2fea480e91

export default function ProductDetails() {
  const params = useParams();
  const { id } = params;
  const contentTypeId = "product_";
  const entryUid = id;
  const environmentName = "preview";
  const base_url = "graphql.contentstack.com";
  const api_key = "blt3815e63116cffb83";
  const entry_uid = id;

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

  const PRODUCT_QUERY = `
  query fetchProduct($entry_uid: String!) {
    product_(uid: $entry_uid) {
    title
    description
    product_price
    imageConnection{
        edges{
            node{
                url
            }
        }
    }
    seo{
      title
      keywords
  }
  }
  }`;

  const graphqlURL = `https://${base_url}/stacks/${api_key}?environment=${environmentName}`;

  const graphqlOptions = {
    method: "POST",
    headers: {
      access_token: "cs8db86493b65d47aa5ee93e0e",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: PRODUCT_QUERY, variables: { entry_uid } }),
  };

  async function getSingleEntry() {
    try {
      const response = await fetch(graphqlURL, graphqlOptions);
      const result = await response.text();
      const parsedResult = JSON.parse(result);
      setContent(parsedResult.data);
      console.log("Single Entry response", parsedResult);
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
    dispatch({ type: "ADD", product });
  };

  return (
    <Container>
      <br />
      {content && <Helmet>
        <title>{content.product_.title}</title>
        <meta name="description" content={content.product_.description} />
        {content.product_.seo.title && <meta name="keywords" content={content.product_.seo.keywords} />}
      </Helmet>
      }
      
      {content && (
        <Row>
          <Col md={6}>
            <img
              src={content.product_.imageConnection.edges?.[0].node.url}
              alt={content.product_.title}
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
                <h1>{content.product_.title}</h1>
              </ListGroup.Item>
              <ListGroup.Item>
                Price: ${content.product_.product_price}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Description:</strong>
                <p>{content.product_.description}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  variant="outline-primary"
                  onClick={() => {
                    addToCart(content.product_);
                  }}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <ReadOutLout product={content.product_} />
          </Col>
        </Row>
      )}
    </Container>
  );
}
