import React from "react";
import "./Header.css";
import newsIcon from "./news.png";

const Header = () => {
  return (
    <div className="header">
      <div className="icon">
        <img src={newsIcon} alt="news icon" />
      </div>
      <div className="news-title">
        <h2>News App</h2>
      </div>
    </div>
  );
};

export default Header;
