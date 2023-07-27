import "./App.css";
import ProductDetails from "./Components/ProductDetails";
import Products from "./Components/Products";
// import Navbar from "./Components/Navbar";
import "./styles.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Screens/Home";
import Footer from "./Components/Footer";
import CartPage from "./Screens/CartPage";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DisplayCartIcon from "./Components/DisplayCartIcon";
import SearchBar from "./Components/SearchBar";

class App extends Component {
  render() {
    return (
      <Router>
        {/* <Navbar /> */}

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
              <Link
                className="nav-link"
                to="/products?category=bltffb98c274984c1b9"
              >
                Men
              </Link>
              <Link
                className="nav-link"
                to="/products?category=blt27cb90bfbc15ac7e"
              >
                Women
              </Link>
              <Link
                className="nav-link"
                to="/products?category=blt2e792be825c40bdd"
              >
                Shoes
              </Link>
              <Link
                className="nav-link"
                to="/products?category=bltef999c24645336df"
              >
                Accessories
              </Link>
            </Nav>
            <SearchBar />
            <DisplayCartIcon />
          </Container>
        </Navbar>

        <div>
          <Routes>
            <Route
              exact
              path="/products"
              element={<Products type="product_" />}
            ></Route>
            <Route
              exact
              path="/product/:id"
              element={<ProductDetails />}
            ></Route>
            <Route
              exact
              path="/"
              element={<Home type="products_list123" />}
            ></Route>
            <Route
              exact
              path="/cart"
              element={<CartPage />}
            ></Route>
          </Routes>
        </div>
        {/* <Footer /> */}
      </Router>
    );
  }
}

export default App;
