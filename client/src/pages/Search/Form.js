import React from 'react'


const Form = ({ handleSearch, handleInput, bookSearchTerm }) => {
  return (
    <div className="jumbotron jumbotron-fluid  mx-auto mt-3" style={{ maxWidth: "80%" }}>
      <div className="container">
        <form onSubmit={handleSearch}>
          <div className="form-group">
            <label htmlFor="bookSearch">Search for a book</label>
            <input type="text" onChange={handleInput} className="form-control" value={bookSearchTerm} name="bookSearchTerm" placeholder="Harry Potter" />
          </div>
          <button type="submit" className="btn btn-primary">Search</button>
        </form >
      </div>
    </div>)
}

export default Form