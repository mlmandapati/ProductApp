import "./App.css";
import "./styles.css";
import ProductDetails from "./Components/ProductDetails";
import Products from "./Components/Products";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Screens/Home";
import Footer from "./Components/Footer";
import CartPage from "./Screens/CartPage";
import Container from "react-bootstrap/Container";

import DisplayCartIcon from "./Components/DisplayCartIcon";
import SearchBar from "./Components/SearchBar";
import NavigationBar from "./Components/NavigationBar";

class App extends Component {
  render() {
    return (
      <Router>
        <NavigationBar type="category_product"/>

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
