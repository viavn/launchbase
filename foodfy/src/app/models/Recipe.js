const data = require('../../../data.json')

module.exports = {
  all(callback) {
    callback(data.recipes)
  },
  find(id, callback) {
    const recipe = data.recipes.find(r => r.id == id)
    callback(recipe)
  },
  favoriteRecipes(callback) {
    const favoriteRecipes = data.recipes.slice(0, 6)
    callback(favoriteRecipes)
  }
}