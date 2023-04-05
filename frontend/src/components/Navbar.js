import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// const navLinks = [
//     //{ href: "/", label: "Home" },
//     { href: "/profile-management", label: "Profile" },
//     { href: "/new-fuel-quote", label: "Quote" },
//     { href: "/fuel-quote-history", label: "History" }
//   ];

  function Navbar() {
    const user = useSelector((state) => state.user);

    return (
      <nav style={{ backgroundColor: 'gray', height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
        <a href="/" style={{ color: 'white' }}>FuelMule</a>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* <a href="/user/profile-management" style={{ color: 'white', marginRight: '20px' }}>Profile</a> */}
          <Link to="/user/profile-management">Manage Profile</Link>
          <a href="/user/new-fuel-quote" style={{ color: 'white' }}>New Quote</a>
          <a href="/user/fuel-quote-history" style={{ color: 'white' }}>History</a>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
