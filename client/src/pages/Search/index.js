import React, { Component } from 'react'
import Header from './Header'
import Form from './Form'
import Books from './Books'
import API from '../../utils/API';


class Search extends Component {
  state = {
    bookSearchTerm: "",
    books: []
  }

  handleSearch = event => {
    event.preventDefault()
    API.searchBooks(this.state.bookSearchTerm, booksRes => {
      this.setState({
        books: [booksRes]
      })
      console.log(`this.state.books is equal to ${this.state.books}`)
    })

  }

  handleSave = event => {
    API.saveBook()
  }
  handleDel = event => {
    API.deleteBook()
  }

  handleInput = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <>
        <Header />
        <Form handleSearch={this.handleSearch} handleInput={this.handleInput} bookSearchTerm={this.state.bookSearchTerm} />
        <div className="jumbotron jumbotron-fluid  mx-auto mt-3" style={{ maxWidth: "80%" }}>
          {/* {
          this.state.books.map(() => {
            <Books
              id={'yes}
              author={'yes'}
              handleSave={this.handleSave}
              handleDel={this.handleDel}
              image={'yes'}
              linkTo={'yes'}
              snippet={'yes'}
              summary={'yes'}
              title={'yes'}
            />
          })
        } */}
        </div>
      </>
    )
  }

}

export default Search