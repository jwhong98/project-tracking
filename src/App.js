import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import ToggleMenu from "./components/ToggleMenu";

function App() {
  const [menuShown, setMenuShown] = useState(false);

  const showMenuHandler = () => {
    setMenuShown(true);
  };

  const closeMenuHandler = () => {
    setMenuShown(false);
  };
  return (
    <>
      <Navbar menu={menuShown} onShowMenu={showMenuHandler} />
      {menuShown && <ToggleMenu onClose={closeMenuHandler} />}
      <Header />
      <Intro />
    </>
  );
}

export default App;
