const Recipes = require('../models/Recipe')

module.exports = {
  index(req, res) {
    Recipes.all(function (recipes) {
      return res.render('admin/index', { recipes })
    })
  },
  create(req, res) {
    res.send('create')
  },
  post(req, res) {
    res.send('post')
  },
  show(req, res) {
    const { id } = req.params

    Recipes.find(id, function (recipe) {
      if (!recipe) {
        res.redirect('/not-found')
      } else {
        res.render('admin/show', { recipe })
      }
    })
  },
  edit(req, res) {
    const { id } = req.params

    Recipes.find(id, function (recipe) {
      if (!recipe) {
        res.redirect('/not-found')
      } else {
        res.render('admin/edit', { recipe })
      }
    })
  },
  put(req, res) {
    res.send(req.body)
  },
  delete(req, res) {    
    res.send(`delete: ${req.body}`)
  }
}