import React, {Component} from 'react';
import Books from './books'
import API from '../../utils/API'

class Saved extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    API.getBooks()
      .then(res => this.setState({ books: res }))
      .catch(err => console.log(err))
  }

  handleDel = event => {
    API.deleteBook()
      .then(res => res.json())
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid  mx-auto mt-3" style={{ maxWidth: "80%" }}>
        {/* {
      this.state.books.map(({id, author, handleDel, image, linkTo, snippet, summary, title}) => {
        <Books
          id={y'es}
          author={'yes'}
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
    );
  }
}

export default Saved;