import { NavLink } from "react-router-dom"
import { activeLink } from "../App"

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "gray",
        height: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <NavLink to="/" className={activeLink}>
        FuelMule
      </NavLink>
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* <a href="/user/profile-management" style={{ color: 'white', marginRight: '20px' }}>Profile</a> */}
        <NavLink to="/user/profile-management" className={activeLink}>
          Manage Profile
        </NavLink>
        <NavLink to="/user/new-fuel-quote" className={activeLink}>
          New Quote
        </NavLink>
        <NavLink to="/user/fuel-quote-history" className={activeLink}>
          History
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
