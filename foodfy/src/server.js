const express = require('express')
const nunjucks = require('nunjucks')

const recipies = require('./data')

const server = express()
const port = 5003

server.use(express.static('public'))
server.set('view engine', 'njk')

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
})

server.get('/', (req, res) => {
  const favoriteRecipes = recipies.slice(0, 6)
  return res.render('home', { recipes: favoriteRecipes })
})

server.get('/recipes', (req, res) => {
  return res.render('recipes', { recipies })
})

server.get('/about', (req, res) => {
  return res.render('about')
})

server.get('/recipe/:index', (req, res) => {
  const recipeIndex = req.params.index
  const recipe = recipies[recipeIndex]

  if (recipe) return res.render('recipe', { recipe })
  else return res.render('not-found')
})

server.use((req, res) => {
  res.status(404).render('not-found')
})

server.listen(port, () => {
  console.log(`server is running on localhost:${port}`)
})
