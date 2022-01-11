import React from "react";
import { ToggleContainer, Menu, MenuItem, Login } from "./ToggleMenuElements";

const ToggleMenu = () => {
  return (
    <ToggleContainer>
      <Menu>
        <MenuItem>product</MenuItem>
        <MenuItem>features</MenuItem>
        <MenuItem>pricing</MenuItem>
      </Menu>
      <Login>login</Login>
    </ToggleContainer>
  );
};

export default ToggleMenu;
