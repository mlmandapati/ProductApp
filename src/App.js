import "./App.css";
import ProductBox from "./Components/ProductBox";
import Products from "./Components/Products";
import Navbar from "./Components/Navbar";
import "./styles.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Screens/Home";
import Footer from "./Components/Footer";
import CartPage from "./Screens/CartPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
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
              element={<ProductBox />}
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
        <Footer />
      </Router>
    );
  }
}

export default App;
