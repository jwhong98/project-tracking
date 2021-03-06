import React from "react";
import img from "../../images/illustration-devices.svg";
import { HeaderContainer, HeaderImg, HeaderBackDrop } from "./HeaderElements";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderBackDrop></HeaderBackDrop>
      <HeaderImg src={img} />
    </HeaderContainer>
  );
};

export default Header;
