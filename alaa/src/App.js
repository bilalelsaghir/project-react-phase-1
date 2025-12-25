import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Ratings from './pages/Ratings';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import './App.css';

function App() {
  const { user } = useAuth();

  return (
    <div className="app">
      {user && <NavBar />}
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/browse" element={user ? <Browse /> : <Navigate to="/login" />} />
        <Route path="/ratings" element={user ? <Ratings /> : <Navigate to="/login" />} />
        <Route path="/contact" element={user ? <Contact /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
