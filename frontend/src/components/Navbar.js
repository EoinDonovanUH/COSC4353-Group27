import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { activeLink } from "../App"
import { setQuotes } from "../redux/features/fuelQuote"

// const navLinks = [
//     //{ href: "/", label: "Home" },
//     { href: "/profile-management", label: "Profile" },
//     { href: "/new-fuel-quote", label: "Quote" },
//     { href: "/fuel-quote-history", label: "History" }
//   ];
function Navbar() {
  const userId = useSelector((state) => state.user.userId)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  async function getFuelQuotes(e) {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:3500/fuel-quote-history", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_credentials: userId }),
      })
      const { message, history } = await response.json()
      if (response.status === 200 || response.status === 201) {
        dispatch(setQuotes(history))
        navigate("/user/fuel-quote-history")
      } else alert(message)
    } catch (error) {
      console.error(error)
      alert("Unable to complete request")
    }
  }

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
        <NavLink
          to="/user/fuel-quote-history"
          className={activeLink}
          onClick={getFuelQuotes}
        >
          History
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
