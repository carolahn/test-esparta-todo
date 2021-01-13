import React from "react";
import logo from "../../assets/images/logo_todo.png";
import "./styles.css";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__logo">
        <img alt="logo" src={logo} />
      </div>
    </div>
  );
};

export default Header;
