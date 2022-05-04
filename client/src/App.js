import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

//Pages and components
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navigation from "./components/Nav";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import Login from "./pages/Login";
import CreateUser from "./pages/CreateUser";
import Cart from "./pages/Cart";
import UploadCSV from "./pages/UploadCSV";
import SingleProduct from "./pages/SingleProduct";
import Orders from "./pages/Orders";
import Completed from "./pages/Completed";
import Deleted from "./pages/Deleted";
import Dashboard from "./pages/Dashboard";
import { CartProvider } from "./components/Context/CartContext";
import CartModal from "./components/CartModal";
import OrderModal from "./components/OrderModal";

//React App with react router for navigation and the shopping cart context provider
function App() {
  
  const [user, setUser] = useState('');
  useEffect(() => {
    (
      async () => {
        const response = await fetch("/api/user/user", {
          headers: { "Content-Type": "application/json" },
          credentials: 'include'
        });
        const content = await response.json();
        setUser(content.username);
      }
    )();
  });

  const [cartModalShow, setCartModalShow] = useState(false);
  const [orderModalShow, setOrderModalShow] = useState(false);

  return (
    <Router>
      <CartProvider>
        <CartModal
          show={cartModalShow}
          onHide={() => setCartModalShow(false)}
        />
        <OrderModal
          show={orderModalShow}
          onHide={() => setOrderModalShow(false)}
        />
        <div className="App-header">
          <Navigation user={user} setUser={setUser}></Navigation>
        </div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/product" element={<Product setCartModalShow={setCartModalShow}/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/upload" element={<UploadCSV user={user}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setUser={setUser}/>} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/orders" element={<Orders user={user} setOrderModalShow={setOrderModalShow}/>} />
          <Route path="/completed" element={<Completed user={user} setOrderModalShow={setOrderModalShow}/>} />
          <Route path="/deleted" element={<Deleted user={user} setOrderModalShow={setOrderModalShow}/>} />
          <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser} setOrderModalShow={setOrderModalShow}/>} />
          <Route path="/single/:partId" element={<SingleProduct setCartModalShow={setCartModalShow}/>} />
        </Routes>
        <div className="App-footer">
          <Footer user={user} setUser={setUser}></Footer>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
