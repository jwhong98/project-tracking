import React from "react";
import {
  Nav,
  NavWrap,
  NavLogo,
  NavToggle,
  NavLinks,
  NavMenu,
  MenuItem,
  Login,
} from "./NavbarElements";

import logo from "../../images/logo.svg";
import toggle from "../../images/icon-hamburger.svg";
import close from "../../images/icon-close.svg";

const Navbar = (props) => {
  return (
    <Nav>
      <NavLogo src={logo} />
      <NavToggle
        src={!props.menu ? toggle : close}
        onClick={props.onShowMenu}
      />
      <NavLinks>
        <NavMenu>
          <MenuItem>product</MenuItem>
          <MenuItem>features</MenuItem>
          <MenuItem>pricing</MenuItem>
        </NavMenu>
        <Login>login</Login>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
