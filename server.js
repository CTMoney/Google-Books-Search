const express = require('express'),
  mongoose = require('mongoose'),
  path = require('path'),
  PORT = process.env.PORT || 3001,
  app = express(),
  routes = require('./routes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"))
})

app.use(routes)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks")

app.listen(PORT, () => console.log(`🌎 ==> API server now on port ${PORT}`))