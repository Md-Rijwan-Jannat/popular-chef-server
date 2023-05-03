const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const chef = require('./Data/chef.json')

app.get('/', (req, res) => {
  res.send('the-chef-recipe-server running')
})
app.get('/chef', (req, res) => {
  res.send(chef);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})