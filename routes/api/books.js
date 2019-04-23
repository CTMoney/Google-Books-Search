const router = require('express').Router(),
  booksController = require("../../controllers/booksController")

router.route("/")
  .get(booksController.viewBooks)
  .post(booksController.saveBook)

router.route("/:id")
  .get(booksController.deleteBook)

module.exports = router