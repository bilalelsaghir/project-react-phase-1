import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import API_BASE from '../config/api';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);

  // Fetch favorites when user logs in
  useEffect(() => {
    if (user) {
      axios.get(`${API_BASE}/favorites/${user.id}`)
        .then(res => {
          // normalize favorites
          const normalized = res.data.map(fav => ({
            id: fav.favoriteRowId,   // backend favorite row ID
            movieId: fav.movieId,
            title: fav.title,
            image: fav.image,
            year: fav.year,
            rating: fav.rating,
            duration: fav.duration || '',
            category: fav.category || '',
            description: fav.description || ''
          }));
          setFavorites(normalized);
        })
        .catch(err => console.log(err));
    } else {
      setFavorites([]);
    }
  }, [user]);

  // Add movie to favorites
  const addToFavorites = async (movie) => {
    if (!user) return alert('Login first!');
    try {
      const res = await axios.post(`${API_BASE}/favorites`, {
        userId: user.id,
        movieId: movie.id
      });

      if (res.data.success) {
        setFavorites(prev => [
          ...prev,
          {
            id: res.data.insertId,  // this is the favorite row ID
            movieId: movie.id,
            title: movie.title,
            image: movie.image,
            year: movie.year,
            rating: movie.rating,
            duration: movie.duration || '',
            category: movie.category || '',
            description: movie.description || ''
          }
        ]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Remove movie from favorites
  const removeFromFavorites = async (movieId) => {
    const fav = favorites.find(f => f.movieId === movieId);
    if (!fav) return;
    try {
      await axios.delete(`${API_BASE}/favorites/${fav.id}`);
      setFavorites(prev => prev.filter(f => f.movieId !== movieId));
    } catch (err) {
      console.log(err);
    }
  };

  const isFavorite = (movieId) => favorites.some(f => f.movieId === movieId);

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
