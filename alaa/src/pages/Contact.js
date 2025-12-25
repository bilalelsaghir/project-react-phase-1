import React, { useState } from "react";
import "../styles/Contact.css";
import contactImage from "../assets/movielogo.jpg";
import API_BASE from "../config/api";

const Contact = () => {
  const [state, setState] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE}/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state)
      });

      const data = await response.json();

      if (data.success) {
        alert("Welcome! We will contact you soon 😊");
        setState({ name: "", email: "", message: "" });
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Server error. Please try again later.");
    }
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${contactImage})` }}
      ></div>

      <div className="rightSide">
        <h1>Contact Us</h1>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={state.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            placeholder="Message"
            value={state.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
