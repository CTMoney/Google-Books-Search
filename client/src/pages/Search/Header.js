import React from 'react'

const Header = () => {
  return (
    <div className="jumbotron jumbotron-fluid mx-auto mt-4" style={{ maxWidth: "80%" }}>
      <div className="container">
        <h1 className="display-4">(React) Google Books Search</h1>
        <p className="lead">Search for and Save Books of Interest</p>
      </div>
    </div>
  )
}

export default Header