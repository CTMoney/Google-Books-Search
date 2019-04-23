const path = require('path'),
  router = require('exppress').Router(),
  apiRoutes = require('./api')

router.use("/api", apiRoutes)

router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

module.exports = router