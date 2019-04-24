import axios from 'axios'

export default {
  
  getBooks() {
    return axios.get("/api/books")
  },
  saveBook() {
    return axios.post("api/books/new")
  },
  deleteBook(id) {
    return axios.delete('api/books/' + id)
  }
  
}