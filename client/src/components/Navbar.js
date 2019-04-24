import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <p className="navbar-brand">
        <Link to="/">BOOKSEARCH</Link>{' '}
      </p>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <p className="nav-link">
              <Link to="/">Search</Link>
            </p>
          </li>
          <li className="nav-item">
            <p className="nav-link">
              <Link to="/saved">Saved</Link>
            </p>
          </li>
        </ul>
      </div>
    </nav>
  )
}
// {window.location.pathname == "/saved" ? "nav-item active" : "nav-item"}
// {window.location.pathname == "/" ? "nav-item active" : "nav-item"}
export default Navbar
