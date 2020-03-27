const Recipe = require('../models/Recipe')

module.exports = {
  index(req, res) {
    Recipe.favoriteRecipes(function (recipes) {
      return res.render('home/index', { recipes })
    })
  },
  about(req, res) {
    return res.render('home/about')
  }
}