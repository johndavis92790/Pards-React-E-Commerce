import "./App.css";
// import API from "./utils/API";
import React, { useState } from 'react';

//Pages
// import About from "./components/About"
// import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
// import Product from "./components/Product"

function App() {
  // const apifun = async () => {
  //   try {
  //     const response = await API.getUsers();
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const [navSelection, setNavSelection] = useState('home');
  return (
    <div>
      <Header setNavSelection={setNavSelection}></Header>
      <main>
        {navSelection === "home" ? <Home></Home> : <></>}
        {/* {navSelection === "product" ? <Product></Product> : <></>}
        {navSelection === "about" ? <About></About> : <></>}
        {navSelection === "contact" ? <Contact></Contact> : <></>} */}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
