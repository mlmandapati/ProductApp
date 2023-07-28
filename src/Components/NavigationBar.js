import { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails.js";
import ProductBox from "./ProductBox.js";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { Link, useNavigate, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchBar from "./SearchBar.js";
import DisplayCartIcon from "./DisplayCartIcon.js";

export default function NavigationBar(props) {
  //url to fetch the recepies
  const url = `https://cdn.contentstack.io/v3/content_types/${props.type}/entries?environment=preview`;

  const [navCat, setNavCat] = useState([]);

  const options = {
    method: "GET",
    headers: {
      api_key: "blt3815e63116cffb83",
      access_token: "cs8db86493b65d47aa5ee93e0e",
      "Content-Type": "application/json",
    },
  };

  async function getCategories() {
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      const parsedResult = await JSON.parse(result);
      //console.log("response",result);
      setNavCat(parsedResult.entries);
      //console.log("categories",navCat);

      // const parsedResult = JSON.parse(result);
      // setData(parsedResult.results);
      // console.log("after fetch", data);
    } catch (error) {
      console.log(error);
    }
  }
  function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toUpperCase() : word.toLowerCase();
    }).replace(/\s+/g, '');
  }

  useEffect(() => {
    getCategories();
  }, [props]);

  return (
    <Navbar
          bg="light"
          data-bs-theme="light"
        >
          <Container>
            <Nav className="me-auto">
              <Link
                className="nav-link"
                to="/"
              >
                <strong>Shopperverse</strong>
              </Link>
              {navCat.length> 0 && navCat.map((category,index) => (
                     <Link
                     className="nav-link"
                     to={`/products?category=${category.uid}`}
                   >
                     {camelize(category.title)}
                   </Link>
              ))}
             
             
            </Nav>
            <SearchBar />
            <DisplayCartIcon />
          </Container>
        </Navbar>
   
  );
}
