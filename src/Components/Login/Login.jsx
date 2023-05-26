import React from "react";
import "./Login.css";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        let userEmail = user.email;
        let userName = user.displayName;
        let userProfilePic = user.photoURL;

        localStorage.setItem("userEmail", userEmail);
        localStorage.setItem("userName", userName);
        localStorage.setItem("userProfilePic", userProfilePic);

        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="loginContainer">
      <button
        type="button"
        className="login-with-google-btn"
        onClick={handleSignIn}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
