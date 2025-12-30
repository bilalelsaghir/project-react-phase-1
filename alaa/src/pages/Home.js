import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieRow from '../components/MovieRow';
import '../styles/Home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

 useEffect(() => {
  const fetchMovies = async () => {
    try {
      const response = await axios.get("http://localhost:5000/movies");
      setMovies(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  fetchMovies();
}, []);

  if (movies.length === 0) return <p>Loading movies...</p>;

  const featuredMovie = movies[0];

  const actionMovies = movies.filter(movie => movie.category === "Action");
  const dramaMovies = movies.filter(movie => movie.category === "Drama");
  const sciFiMovies = movies.filter(movie => movie.category === "Sci-Fi");
  const crimeMovies = movies.filter(movie => movie.category === "Crime");

  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero-section"
        style={{ backgroundImage: `url(http://localhost:5000/images/${featuredMovie.image})` }}
      >
        <h1>{featuredMovie.title}</h1>
        <p>{featuredMovie.description}</p>
        <div className="hero-buttons">
    <button className="play-btn">▶️ Play</button>
    <button className="info-btn">ℹ Info</button>
  </div>
      </div>

      {/* Movie Rows */}
      <MovieRow title="Action Movies" movies={actionMovies} />
      <MovieRow title="Sci-Fi Movies" movies={sciFiMovies} />
      <MovieRow title="Drama" movies={dramaMovies} />
      <MovieRow title="Crime" movies={crimeMovies} />
    </div>
  );
};

export default Home;
