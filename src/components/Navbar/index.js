import React from "react";
import {
  Nav,
  NavLogo,
  NavToggle,
  NavLinks,
  NavMenu,
  MenuItem,
  Login,
} from "./NavbarElements";

import logo from "../../images/logo.svg";
import toggle from "../../images/icon-hamburger.svg";

const Navbar = () => {
  return (
    <Nav>
      <NavLogo src={logo} />
      <NavToggle src={toggle} />
      <NavLinks>
        <NavMenu>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
        </NavMenu>
        <Login></Login>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
