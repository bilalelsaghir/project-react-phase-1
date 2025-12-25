import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/NavBar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { logout } = useAuth();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleLogout = () => {
    logout();
    closeMenu();
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" onClick={closeMenu}>
          <h1 className="logo">STREAMFLIX</h1>
        </Link>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? '✖' : '☰'}
      </button>

      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/browse" onClick={closeMenu}>Browse</Link>
        <Link to="/ratings" onClick={closeMenu}>My List</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default NavBar;
