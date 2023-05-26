import React, { useState } from "react";
import "./Homepage.css";
import axios from "axios";
import Article from "./Article";
import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [fave, isFav] = useState(false);

  const [favList, setFavList] = useState([]);

  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let config = {
      headers: {
        "x-api-key": "KKZC1YTOpFh6tCFqScuTR7v1OpdNWtDGbIyNvs24UoA",
      },
      params: {
        q: searchQuery,
        lang: "en",
        sort_by: "relevancy",
        page: 1,
      },
    };

    const result = await axios.get(
      `https://api.newscatcherapi.com/v2/search?`,
      config
    );

    const articles = result.data.articles;
    setArticles(articles);
    setLoading(false);
  };

  return (
    <div className="container">
      <header>Welcome to NewsApp</header>

      <div>
        <Link to="/profile" className="profile">
          <img src={localStorage.getItem("userProfilePic")} alt="profilepic" />
        </Link>
        <button onClick={handleSignOut}>Sign out</button>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit"> Search</button>
      </form>

      {loading ? <p> "Loading...."</p> : ""}

      <div className="articlesList">
        {articles.map((x, idx) => (
          <Article
            favorite={isFav}
            key={idx}
            img={x.media}
            link={x.link}
            excerpt={x.excerpt}
            publishedDate={x.published_date}
            author={x.author}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
