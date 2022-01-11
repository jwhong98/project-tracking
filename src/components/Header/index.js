import React from "react";
import img from "../../images/illustration-devices.svg";
import { HeaderContainer, HeaderImg } from "./HeaderElements";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderImg src={img} />
    </HeaderContainer>
  );
};

export default Header;
