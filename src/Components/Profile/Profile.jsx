import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const Profile = () => {
  const profilePic = localStorage.getItem("userProfilePic");
  const userName = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("userEmail");
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="profilePage">
      <header>
        <Link to="/">Home</Link>
      </header>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={profilePic} />
        <Card.Body>
          <Card.Text>
            {userName} {userEmail}
          </Card.Text>
          <Button onClick={handleSignOut}> Log Out</Button>
        </Card.Body>
      </Card>

      <div className="savedList"></div>
    </div>
  );
};

export default Profile;
