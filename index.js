const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const chef = require('./Data/chef.json')
const recipe = require('./Data/recipe.json')

const cors = require('cors');

app.use(cors());
app.get('/', (req, res) => {
  res.send('the-chef-recipe-server running')
})
app.get('/chef', (req, res) => {
  res.send(chef);
})
app.get('/recipe', (req, res) => {
  res.send(recipe)
})
app.get('/chef/:id', (req, res) => {
  const id = parseInt(req.params.id)
  if (id === 0) {
      res.send(recipe)
  } else {
      const categoryNews = recipe.filter(n => parseInt(n._id) === id)
      res.send(categoryNews);
  }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})