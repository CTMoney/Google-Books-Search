const mongoose = require('mongoose'),
  Schema = mongoose.Schema

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  summary: { type: String, required: true },
  snippet: { type: String, required: false },
  linkTo: { type: String, required: false },
  image: { type: String, required: false }
})

const Book = mongoose.model("Book", bookSchema)

module.exports = Book