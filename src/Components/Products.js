import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProductDetails from "./ProductDetails.js";
import ProductBox from "./ProductBox.js";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useDispatchCart } from "../Context/CartContext";

export default function Products(props) {
  const navigate = useNavigate();
  const { search } = useLocation();
  const searchParam = new URLSearchParams(search);
  const base_url = "graphql.contentstack.com";
  const environment = "preview";
  const api_key = "blt3815e63116cffb83";

  const category = searchParam.get("category") || "all";
  const searchText = searchParam.get("search") || "";
  // console.log("searchText", searchText);
  //url to fetch the recepies
  const url = `https://cdn.contentstack.io/v3/content_types/${props.type}/entries?environment=preview`;

  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState();

  const options = {
    method: "GET",
    headers: {
      api_key: "blt3815e63116cffb83",
      access_token: "cs8db86493b65d47aa5ee93e0e",
      "Content-Type": "application/json",
    },
  };

  // const PRODUCTS_QUERY = `{
  //   all_product_ {
  //     total
  //     items{
  //       title
  //     }
  //   }
  // }`;

  // //GraphQL API details

  // const graphqlURL = `https://${base_url}/stacks/${api_key}?environment=${environment}`

  // const graphqlOptions = {
  //   method: "POST",
  //   headers: {
  //     access_token: "cs8db86493b65d47aa5ee93e0e",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({query: PRODUCTS_QUERY})

  // }

  async function getData() {
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      const parsedResult = await JSON.parse(result);
      console.log("response", result);
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
  }, [props]);

  const sortProducts = (sortOrder) => {
    if (sortOrder === "lowToHigh") {
      products.sort((a, b) => a.product_price - b.product_price);
    } else if (sortOrder === "highToLow") {
      products.sort((a, b) => b.product_price - a.product_price);
    }
    setSortBy(sortOrder);
  };
  return (
    <Container>
      <br />
      <div
        id="sort_container"
        style={{
          margin: "8px",
          paddingBottom: "11px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <label
          style={{ paddingTop: "5px", fontWeight: "bold" }}
          htmlFor="sortSelect"
        >
          Sort by :
        </label>
        <select
          style={{ marginLeft: "8px" }}
          id="sortSelect"
          value={sortBy}
          onChange={(e) => sortProducts(e.target.value)}
        >
          <option value="lowToHigh">Price - Low to High</option>
          <option value="highToLow">Price - High to Low</option>
        </select>
      </div>
      {
        <Row>
          {products.length > 0 &&
            (searchText !== ""
              ? products
                  .filter((product) =>
                    product.title
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  )
                  .map((filteredProduct, index) => (
                    <Col
                      sm={6}
                      lg={4}
                      className="mb-3"
                      key={index}
                    >
                      <ProductBox product={filteredProduct} />
                    </Col>
                  ))
              : products.length > 0 &&
                (category === "all"
                  ? products.map((filteredProduct, index) => (
                      <Col
                        md={3}
                        className="mb-3"
                        key={index}
                      >
                        <ProductBox product={filteredProduct} />
                      </Col>
                    ))
                  : products
                      .filter(
                        (product) => product.category?.[0].uid === category
                      )
                      .map((filteredProduct, index) => (
                        <Col
                          sm={6}
                          lg={4}
                          className="mb-3"
                          key={index}
                        >
                          <ProductBox product={filteredProduct} />
                        </Col>
                      ))))}
        </Row>
      }
    </Container>
  );
}
