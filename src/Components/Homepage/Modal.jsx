import React from "react";
import { Link } from "react-router-dom";
import "./Modal.css";

const Modal = ({ profilePic, handleSignout }) => {
  return (
    <div className="menu">
      <Link to="/profile" className="profile">
        <img className="profileImg" src={profilePic} alt="profilepic" />
      </Link>
      <button onClick={handleSignout}>Sign out</button>
    </div>
  );
};

export default Modal;
