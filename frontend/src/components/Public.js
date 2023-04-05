import { Link } from "react-router-dom";

import React from "react";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">FuelMule!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>Get a free quote today</p>
        <br />
        <p>Owner: Group 27</p>
      </main>
      <footer>
        <Link to="/login">Login</Link>
      </footer>
    </section>
  );
  return content;
};

export default Public;
