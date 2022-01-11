import React from "react";
import img from "../../images/illustration-devices.svg";
import Navbar from "../Navbar";
import { HeaderContainer, HeaderImg, HeaderBackDrop } from "./HeaderElements";

const Header = () => {
  return (
    <HeaderContainer>
      <Navbar />
      <HeaderBackDrop></HeaderBackDrop>
      <HeaderImg src={img} />
    </HeaderContainer>
  );
};

export default Header;
