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

  return (
    <Router>
      <CartProvider>
        <div className="App-header">
          <Navigation user={user} setUser={setUser}></Navigation>
        </div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/upload" element={<UploadCSV user={user}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setUser={setUser}/>} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/orders" element={<Orders user={user}/>} />
          <Route path="/completed" element={<Completed user={user}/>} />
          <Route path="/deleted" element={<Deleted user={user}/>} />
          <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser}/>} />
          <Route path="/single/:partId" element={<SingleProduct />} />
        </Routes>
        <div className="App-footer">
          <Footer user={user} setUser={setUser}></Footer>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
