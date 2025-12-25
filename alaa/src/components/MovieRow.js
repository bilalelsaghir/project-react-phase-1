import React from 'react';
import MovieCard from './MovieCard';
import '../styles/MovieRow.css';

const MovieRow = ({ title, movies }) => {

  const scroll = (direction, e) => {
    const row = e.currentTarget.parentNode.querySelector('.movie-row-items');
    const scrollAmount = row.clientWidth;
    if (direction === 'left') {
      row.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      row.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="movie-row">
      <h2>{title}</h2>
      <div className="row-container">
        <button className="scroll-left" onClick={(e) => scroll('left', e)}>‹</button>
        <div className="movie-row-items">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <button className="scroll-right" onClick={(e) => scroll('right', e)}>›</button>
      </div>
    </div>
  );
};

export default MovieRow;
