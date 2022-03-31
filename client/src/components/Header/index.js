import Navigation from "../Nav";
import React from 'react';

function Header(props) {
  const { setNavSelection } = props;

  return (
    <header>
      <Navigation
        setNavSelection={setNavSelection}
      ></Navigation>
    </header>
  );
}

export default Header;