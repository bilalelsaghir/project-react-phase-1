// ================== IMPORTS ==================
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

// ================== INIT APP ==================
const app = express();
const PORT = process.env.PORT || 5000;

// ================== MIDDLEWARE ==================
app.use(cors());
app.use(express.json());

// Serve static files from public/images
app.use("/images", express.static(path.join(__dirname, "public/images")));

// ================== MYSQL CONNECTION ==================
const db = mysql.createConnection({
  host: process.env.MYSQLHOST || process.env.DB_HOST || "localhost",
  user: process.env.MYSQLUSER || process.env.DB_USER || "root",
  password: process.env.MYSQLPASSWORD || process.env.DB_PASSWORD || "",
  database: process.env.MYSQLDATABASE || process.env.DB_NAME || "movies_db",
  port: process.env.MYSQLPORT ? Number(process.env.MYSQLPORT) : undefined,
});

db.connect((err) => {
  if (err) {
    console.log("Database connection error:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// ================== MOVIES ==================

// GET MOVIES WITH OPTIONAL CATEGORY FILTER
app.get("/movies", (req, res) => {
  const category = req.query.category;

  let sql = "SELECT * FROM movies";
  let params = [];

  if (category && category !== "All") {
    sql += " WHERE category = ?";
    params.push(category);
  }

  db.query(sql, params, (err, results) => {
    if (err) {
      console.log("SQL ERROR:", err);
      return res.status(500).json([]);
    }
    res.json(results);
  });
});

// GET SINGLE MOVIE BY ID
app.get("/movies/:id", (req, res) => {
  const id = req.params.id;
  const query = "SELECT * FROM movies WHERE id = ?";
  db.query(query, [id], (err, data) => {
    if (err || data.length === 0) return res.json(null);
    res.json(data[0]);
  });
});

// GET UNIQUE CATEGORIES
app.get("/categories", (req, res) => {
  const query = "SELECT DISTINCT category FROM movies ORDER BY category ASC";
  db.query(query, (err, data) => {
    if (err) {
      console.log(err);
      return res.json([]);
    }
    res.json(data);
  });
});

// ================== USERS ==================

// SIGNUP
app.post("/signup", (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.json({ success: false, message: "All fields are required" });
  }

  const checkQuery = "SELECT id FROM users WHERE email = ?";
  db.query(checkQuery, [email], (err, data) => {
    if (err) return res.json({ success: false, message: "Database error" });
    if (data.length > 0)
      return res.json({ success: false, message: "Email already exists" });

    const insertQuery =
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    db.query(insertQuery, [username, email, password], (err, result) => {
      if (err) return res.json({ success: false, message: "Database error" });

      res.json({
        success: true,
        user: { id: result.insertId, username, email },
      });
    });
  });
});

// LOGIN
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({
      success: false,
      message: "Email and password are required",
    });
  }

  const query = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(query, [email, password], (err, data) => {
    if (err) return res.json({ success: false, message: "Database error" });
    if (data.length === 0)
      return res.json({ success: false, message: "Invalid email or password" });

    const user = data[0];
    res.json({
      success: true,
      user: { id: user.id, username: user.username, email: user.email },
    });
  });
});

// ================== FAVORITES ==================

// GET USER FAVORITES
app.get("/favorites/:userId", (req, res) => {
  const userId = req.params.userId;
  const query = `
    SELECT 
      f.id,
      m.id AS movieId,
      m.title,
      m.image,
      m.year,
      m.rating,
      m.duration,
      m.category,
      m.description
    FROM favorites f
    JOIN movies m ON f.movieId = m.id
    WHERE f.userId = ?
  `;
  db.query(query, [userId], (err, data) => {
    if (err) return res.json([]);
    res.json(data);
  });
});

// ADD FAVORITE
app.post("/favorites", (req, res) => {
  const { userId, movieId } = req.body;
  if (!userId || !movieId) {
    return res.json({
      success: false,
      message: "User ID and Movie ID are required",
    });
  }

  const checkQuery = "SELECT id FROM favorites WHERE userId = ? AND movieId = ?";
  db.query(checkQuery, [userId, movieId], (err, data) => {
    if (err) return res.json({ success: false, message: "Database error" });
    if (data.length > 0)
      return res.json({ success: false, message: "Already in favorites" });

    const insertQuery = "INSERT INTO favorites (userId, movieId) VALUES (?, ?)";
    db.query(insertQuery, [userId, movieId], (err, result) => {
      if (err) return res.json({ success: false, message: "Database error" });
      res.json({ success: true, insertId: result.insertId });
    });
  });
});

// DELETE FAVORITE
app.delete("/favorites/:id", (req, res) => {
  const favoriteId = req.params.id;
  const query = "DELETE FROM favorites WHERE id = ?";
  db.query(query, [favoriteId], (err) => {
    if (err) return res.json({ success: false, message: "Database error" });
    res.json({ success: true });
  });
});

// ================== CONTACTS ==================

// ADD CONTACT
app.post("/contacts", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.json({ success: false, message: "All fields are required" });
  }
  const query = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
  db.query(query, [name, email, message], (err) => {
    if (err) return res.json({ success: false, message: "Database error" });
    res.json({ success: true, message: "Message sent successfully" });
  });
});

// GET ALL CONTACTS
app.get("/contacts", (req, res) => {
  const query = "SELECT * FROM contacts ORDER BY id DESC";
  db.query(query, (err, data) => {
    if (err) return res.json([]);
    res.json(data);
  });
});

// ================== START SERVER ==================
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
