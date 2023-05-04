const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const chef = require('./Data/chef.json')

const cors = require('cors');

app.use(cors());
app.get('/', (req, res) => {
  res.send('the-chef-recipe-server running')
})
app.get('/chef', (req, res) => {
  res.send(chef);
})
app.get('/chef/:id', (req, res) => {
  const id = parseInt(req.params.id)
  if (id === 0) {
      res.send(chef)
  } else {
      const chefDetails = chef.filter(n => parseInt(n._id) === id)
      res.send(chefDetails);
  }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})