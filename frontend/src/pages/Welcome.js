import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Welcome = () => {
  const name = useSelector((state) => state.user.userName);

  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to{" "}
          <span className="nowrap">FuelMule, {name || "guest"}!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>Get a free quote today</p>
        <p>Owner: Group 27</p>
      </main>
      <footer>
        {name ? (
          <Link to="/logout">Logout</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}

        <br />
        <Link to="/register">Register</Link>
      </footer>
    </section>
  );
  return content;
};

export default Welcome;
