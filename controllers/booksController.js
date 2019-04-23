const db = require("../models")

module.exports = {

  viewBooks(req, res) {
    db.Book.find()
      .then(dbBook => res.json(dbBook))
      .catch(err => console.log(err))
  },
  saveBook(req, res) {
    db.Book.create(req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => console.log(err))
  },
  deleteBook(req, res) {
    db.Book.findByIdAndDelete({ _id: req.params.id })
      .then(dbBook => res.json(dbBook))
      .catch(err => console.log(err))
  }

}