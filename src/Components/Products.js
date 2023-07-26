import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProductBox from "./ProductBox.js";
import SingleProduct from "./SingleProduct.js";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useDispatchCart } from "../Context/CartContext";

export default function Products(props) {
  const navigate = useNavigate();
  const { search } = useLocation();
  const searchParam = new URLSearchParams(search);
  const category = searchParam.get("category") || "all";

  //url to fetch the recepies
  const url = `https://cdn.contentstack.io/v3/content_types/${props.type}/entries?environment=preview`;

  const [products, setProducts] = useState([]);

  const options = {
    method: "GET",
    headers: {
      api_key: "blt3815e63116cffb83",
      access_token: "cs8db86493b65d47aa5ee93e0e",
      "Content-Type": "application/json",
    },
  };

  async function getData() {
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      const parsedResult = await JSON.parse(result);
      //   console.log("response", result);
      setProducts(parsedResult.entries);
      //   console.log("products", products);

      // const parsedResult = JSON.parse(result);
      // setData(parsedResult.results);
      // console.log("after fetch", data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
    // console.log("list",list);

    // console.log("edited", list.entries?.page_content?.list_of_products);
  }, [props]);

  return (
    <Container>
      <h1>List of Products</h1>

      <Row>
        {products.length > 0 &&
          (category === "all"
            ? products.map((filteredProduct, index) => (
                <Col
                  md={3}
                  className="mb-3"
                  key={index}
                >
                  <SingleProduct product={filteredProduct} />
                </Col>
              ))
            : products
                .filter((product) => product.category?.[0].uid == category)
                .map((filteredProduct, index) => (
                  <Col
                    sm={6}
                    lg={4}
                    className="mb-3"
                    key={index}
                  >
                    <SingleProduct product={filteredProduct} />
                  </Col>
                )))}
      </Row>
    </Container>
  );
}
