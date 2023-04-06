import React from "react"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { activeLink } from "../App"

const Welcome = () => {
  const name = useSelector((state) => state.user.userName)

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
          <NavLink to="logout" className={activeLink}>
            Logout
          </NavLink>
        ) : (
          <NavLink to="login" className={activeLink}>
            Login
          </NavLink>
        )}
        <br />
        <NavLink to="register" className={activeLink}>
          Register
        </NavLink>
      </footer>
    </section>
  )
  return content
}

export default Welcome
