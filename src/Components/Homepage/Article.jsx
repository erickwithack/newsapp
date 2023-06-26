import React, { useState } from "react";
import "./Article.css";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Article = ({ img, link, excerpt, publishedDate }) => {
  const [isFav, setIsFav] = useState(false);

  const makeFav = () => {
    setIsFav(!isFav);
  };

  return (
    <section className="articleCard">
      <div className="article">
        {isFav ? (
          <FaHeart onClick={makeFav} style={{ color: "red" }} />
        ) : (
          <FaHeart onClick={makeFav} />
        )}
      </div>
      <Link to={link}>
        <img src={img} alt="Avatar" />
      </Link>

      <div className="card-caption">
        <div>
          <p>{excerpt}</p>
        </div>
      </div>
    </section>
  );
};

export default Article;
