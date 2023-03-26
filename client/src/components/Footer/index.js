import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import logo from "../../assets/Img/logo_main.png";
import { FaHome, FaPhone } from "react-icons/fa";

function Footer({ user, setUser }) {
  const logout = async () => {
    await fetch("/api/user/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: 'include'
    });
    setUser('');
  }
  let menu;
  if (user === undefined) {
    menu = (
      <>
        <p>
          <Link as={Link} to="/product">
            Shop Products
          </Link>
        </p>
        <p>
          <Link as={Link} to="/cart">
            Cart
          </Link>
        </p>
        <p>
          <Link as={Link} to="/login">
            Login
          </Link>
        </p>
      </>
    )
  } else {
    menu = (
      <>
        <p>
          <Link as={Link} to="/product">
            Shop Products
          </Link>
        </p>
        <p>
          <Link as={Link} to="/upload">
            Upload
          </Link>
        </p>
        <p>
          <Link as={Link} to="/dashboard">
            Dashboard
          </Link>
        </p>
        <p>
          <Link as={Link} to="/" onClick={logout}>
            Logout
          </Link>
        </p>
      </>
    )
  }
  return (
    <MDBFooter bgColor='none' style={{ backgroundColor: "#00335a" }} className='App-footer text-center text-color'>
      <section className=' vw-100'>
        <div className='container text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <Link as={Link} to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <p>
                <Link as={Link} to="/">
                  Home
                </Link>
              </p>
              <p>
                <Link as={Link} to="/about">
                  Who We Are
                </Link>
              </p>
              <p>
                <Link as={Link} to="/contact">
                  Contact
                </Link>
              </p>
            </div>
            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              {menu}
            </div>
            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-md-0 mb-4'>
              <p>
                <a href="https://www.google.com/maps/place/5910+300+W,+Murray,+UT+84107">
                  <FaHome className='fas fa-home me-2' />
                  5910 S 300 W
                  <br />
                  Murray, UT 84107
                </a>
              </p>
              <p>
                <a href="tel:+1-801-262-4864"><FaPhone className='fas fa-phone me-2' />801-262-4864</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </MDBFooter>
  );
}

export default Footer;