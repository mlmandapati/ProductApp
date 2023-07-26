
import './App.css';
import ProductBox from './Components/ProductBox';
import Products from './Components/Products';

import "./styles.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Screens/Home';


class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <Routes>
            <Route exact path="/products" element={<Products type="product_"/>}></Route>
            <Route exact path="/product/:id" element={<ProductBox />}></Route>
            <Route exact path="/" element={<Home type="products_list123"/>}></Route>
          </Routes>
        </div>
      </Router>
    ); 
  }
}

export default App;

