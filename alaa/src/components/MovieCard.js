import React, { useState } from 'react';
import API_BASE from '../config/api';
import { useFavorites } from '../contexts/FavoritesContext';
import MovieModal from './MovieModal';
import '../styles/MovieCard.css';

const MovieCard = ({ movie, disableModal = false }) => {
  const [showModal, setShowModal] = useState(false);
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const movieId = movie.id;

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isFavorite(movieId)) removeFromFavorites(movieId);
    else addToFavorites(movie);
  };

  return (
    <>
      <div
        className="movie-card"
        onClick={() => !disableModal && setShowModal(true)}
      >
        <img
          src={`${API_BASE}/images/${movie.image}`}
          alt={movie.title}
        />

        <div
          className="movie-card-overlay"
          onClick={(e) => e.stopPropagation()}
        >
          <h3>{movie.title}</h3>
          <div className="movie-card-info">
            <span className="rating">★ {movie.rating}</span>
            <span>{movie.year}</span>
          </div>

          <button
            className={`favorite-btn ${isFavorite(movieId) ? 'active' : ''}`}
            onClick={handleFavoriteClick}
          >
            {isFavorite(movieId) ? '❤' : '♡'}
          </button>
        </div>
      </div>

      {showModal && !disableModal && (
        <MovieModal movie={movie} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default MovieCard;
