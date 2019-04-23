const router = require('express').Router(),
  bookRoutes = require("./books")

router.use('/books', bookRoutes)

module.exports = router