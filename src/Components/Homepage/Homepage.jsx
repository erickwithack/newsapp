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
    let maxArticles = 30;
    let country = "us";

    let apiKey = "d5b9d0d11f744c03ea2e92c237cce6b3";
    let url = `https://gnews.io/api/v4/search?q=${searchQuery}&lang=en&country=${country}&max=${maxArticles}&apikey=${apiKey}`;

    const result = await axios.get(url);

    const articles = result.data.articles;
    console.log(articles);
    setArticles(articles);
    setLoading(false);
  };

  // new api call

  //

  const profilePic = localStorage.getItem("userProfilePic");

  const showMenu = () => {
    setOpen(!open);
    setTimeout(() => {
      setOpen(!open);
    }, 2000);
  };

  return (
    <div className="container">
      <Header />

      <div className="menu-icon">
        <FaBars className="hamburger" onMouseEnter={showMenu} />
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
            img={x.image}
            link={x.url}
            excerpt={x.description}
            publishedDate={x.publishedAt}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
