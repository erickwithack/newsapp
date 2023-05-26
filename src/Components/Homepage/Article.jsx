import React, { useState } from "react";
import "./Article.css";
import { Link } from "react-router-dom";
import { Card, Col, Button } from "react-bootstrap";

const Article = ({
  img,
  title,
  link,
  excerpt,
  publishedDate,
  author,
  favorite,
}) => {
  const [fav, setFav] = useState(favorite);

  const makeFav = () => {
    setFav(!fav);
  };
  return (
    <Col md="4">
      <Card>
        <Card.Title onClick={makeFav}>{fav ? "❤️" : "♡"}</Card.Title>

        <Card.Body className="caption">
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            By <span>{author} </span> <span>{publishedDate}</span> <br />
            {excerpt}
          </Card.Text>
          <Button>
            <Link to={link}>
              <Card.Img variant="top" src={img} alt="Avatar" />
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Article;
