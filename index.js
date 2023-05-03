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
// app.get('/recipe/:id', (req, res) => {
//   const id = req.params.id;
//   const selectId = recipe.find(r => r._id === id)
//   res.send(selectId)
// })
app.get('/recipe/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const selectedId = recipe.find(n => parseInt(n._id) === id)
  res.send(selectedId)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})