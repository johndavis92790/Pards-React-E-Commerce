import "./App.css";
import React, { useState } from "react";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";

//Pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Login from "./pages/Login";
import CreateUser from "./pages/CreateUser";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import UploadCSV from "./pages/UploadCSV";
import SingleProduct from "./pages/SingleProduct";
import Orders from "./pages/Orders";
import { CartProvider } from "./components/Context/CartContext";

function App() {
  
  // const [singleProduct, setSingleProduct] = useState();

  // function selectProduct(item) {
  //   setSingleProduct(prevItem => {
  //     prevItem = item
  //     console.log("prevItem", prevItem);
  //     return prevItem;
  //   });
  // }

  // function returnProduct() {
  //   console.log("singleProduct", singleProduct);
  //   return singleProduct;
  // }

  return (
    <Router>
      <CartProvider>
        <div className="App-header">
          <Header></Header>
        </div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/product"
            element={<Product />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/upload" element={<UploadCSV />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
        <div className="App-footer">
          <Footer></Footer>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
