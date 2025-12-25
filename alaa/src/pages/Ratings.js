import React, { useState } from 'react';
import { useFavorites } from '../contexts/FavoritesContext';
import MovieCard from '../components/MovieCard';
import '../styles/Ratings.css';

const Ratings = () => {
  const { favorites } = useFavorites();
  const [category, setCategory] = useState("All");

  const filteredFavorites = favorites.filter(fav =>
    category === "All" ? true : fav.category === category
  );

  const categories = [
    "All",
    "Action",
    "Drama",
    "Crime",
    "Sci-Fi",
    "Fantasy",
    "Romance",
    "War",
    "Thriller",
    "Adventure"
  ];

  return (
    <div className="ratings">
      <h1>My Favorite Movies</h1>

      <div className="category-dropdown">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {filteredFavorites.length === 0 ? (
        <p className="no-favorites">
          {category === "All"
            ? "Your list is empty. Add movies to your favorites!"
            : `No favorite movies in "${category}" category.`}
        </p>
      ) : (
        <div className="ratings-grid">
          {filteredFavorites.map((fav) => (
            <MovieCard
              key={fav.movieId}
              movie={{
                id: fav.movieId,
                title: fav.title,
                image: fav.image,
                year: fav.year,
                rating: fav.rating,
                duration: fav.duration,
                category: fav.category,
                description: fav.description
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Ratings;
