const Recipe = require('../models/Recipe')

module.exports = {
  index(req, res) {
    Recipe.all(function (recipes) {
      return res.render('recipe/index', { recipes })
    })
  },
  show(req, res) {
    const { index } = req.params

    Recipe.find(index, function (recipe) {
      if (recipe) return res.render('recipe/recipe', { recipe })
      else return res.render('not-found')
    })
  }
}