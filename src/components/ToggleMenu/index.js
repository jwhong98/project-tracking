import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "../Backdrop";
import { ToggleContainer, Menu, MenuItem, Login } from "./ToggleMenuElements";

const portalElement = document.getElementById("overlay");

const ToggleMenu = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ToggleContainer>
          <Menu>
            <MenuItem>product</MenuItem>
            <MenuItem>features</MenuItem>
            <MenuItem>pricing</MenuItem>
          </Menu>
          <Login>login</Login>
        </ToggleContainer>,
        portalElement
      )}
    </>
  );
};

export default ToggleMenu;
