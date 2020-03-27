const data = require('../../../data')

module.exports = {
  all(callback) {
    callback(data)
  },
  find(index, callback) {
    const recipe = data[index]
    callback(recipe)
  },
  favoriteRecipes(callback) {
    const favoriteRecipes = data.slice(0, 6)
    callback(favoriteRecipes)
  }
}