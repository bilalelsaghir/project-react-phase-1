import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import "../styles/Browse.css";
import API_BASE from "../config/api";

const Browse = () => {
  const [movies, setMovies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("title");

  // GET categories from backend
  useEffect(() => {
    axios
      .get(`${API_BASE}/categories`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  }, []);

  // GET movies when category changes
  useEffect(() => {
    let url = `${API_BASE}/movies`;

    if (category !== "All") {
      url += `?category=${encodeURIComponent(category)}`;
    }

    axios
      .get(url)
      .then((res) => setMovies(res.data))
      .catch((err) => console.error(err));
  }, [category]);

  const filteredMovies = movies
    .filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "title") return a.title.localeCompare(b.title);
      if (sortBy === "year") return b.year - a.year;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="browse">
      <div className="browse-header">
        <h1>Browse Movies</h1>

        <div className="browse-controls">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />

          {/* Category Filter */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="sort-select"
          >
            <option value="All">All Categories</option>
            {categories.map((c, index) => (
              <option key={index} value={c.category}>
                {c.category}
              </option>
            ))}
          </select>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="title">Sort by Title</option>
            <option value="year">Sort by Year</option>
            <option value="rating">Sort by Rating</option>
          </select>
        </div>
      </div>

      <div className="browse-results">
        <p className="results-count">
          Showing {filteredMovies.length} movies
        </p>

        <div className="browse-grid">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
