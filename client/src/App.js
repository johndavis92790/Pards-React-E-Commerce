import "./App.css";
import React, { useState } from 'react';

//Pages
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Product from "./components/Product"
import Login from "./components/Login";


function App() {

  const [navSelection, setNavSelection] = useState('home');
  return (
    <div>
      <div className="App-header">
        <Header setNavSelection={setNavSelection}></Header>
      </div>
      <main>
        {navSelection === "home" ? <Home></Home> : <></>}
        {navSelection === "product" ? <Product></Product> : <></>}
        {navSelection === "about" ? <About></About> : <></>}
        {navSelection === "contact" ? <Contact></Contact> : <></>}
        {navSelection === "login" ? <Login></Login> : <></>}
      </main>
      <div className="App-header">
      <Footer setNavSelection={setNavSelection}></Footer>
      </div>
    </div>
  );
}

export default App;
