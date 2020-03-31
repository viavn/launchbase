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
    const keys = Object.keys(req.body)

    for (key of keys) {
      if (req.body[key] == '')
        return res.send('Please, fill all fields!')
    }

    Recipes.update(req.body, function (id) {
      return res.redirect(`/admin/recipes/${id}`)
    })
  },
  delete(req, res) {
    const id = Number(req.body.id)

    Recipes.delete(id, function () {
      return res.redirect('/admin/recipes')
    })
  }
}