import React from "react";
import "./Article.css";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Article = ({
  img,
  title,
  link,
  excerpt,
  publishedDate,
  author,
  favorite,
}) => {
  return (
    <section className="articleCard">
      <div className="article">
        {favorite ? <FaHeart style={{ color: "red" }} /> : <FaHeart />}
      </div>
      <Link to={link}>
        <img src={img} alt="Avatar" />
      </Link>

      <div className="card-caption">
        <h2>{title}</h2>

        <div>
          By <span>{author} </span> <span>{publishedDate}</span> <br />
          <p>{excerpt}</p>
        </div>
      </div>
    </section>
  );
};

export default Article;
