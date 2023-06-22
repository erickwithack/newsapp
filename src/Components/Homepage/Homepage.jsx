import React, { useState } from "react";
import "./Homepage.css";
import axios from "axios";
import Article from "./Article";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import loadingGif from "./giphy.gif";
import { FaSearch, FaBars } from "react-icons/fa";
import Modal from "./Modal";

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [open, setOpen] = useState(false);

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

  const profilePic = localStorage.getItem("userProfilePic");

  setTimeout(() => {
    setOpen(!open);
  }, 5000);

  return (
    <div className="container">
      <Header />

      <div className="menu-icon">
        {!open && (
          <FaBars className="hamburger" onClick={() => setOpen(!open)} />
        )}

        {open && (
          <Modal profilePic={profilePic} handleSignout={handleSignOut} />
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className="search-bar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="searchSubmitButton">
          <FaSearch />
        </button>
      </form>

      {loading ? (
        <div>
          {" "}
          <img src={loadingGif} alt="loading..." />{" "}
        </div>
      ) : (
        ""
      )}

      <div className="articlesList">
        {articles.map((x, idx) => (
          <Article
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
