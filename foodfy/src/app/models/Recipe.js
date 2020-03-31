const fs = require('fs')
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
  },
  update(model, callback) {
    const id = Number(model.id)
    const { image, title, author, ingredients, preparation, information } = model

    const values = {
      id,
      image,
      title,
      author,
      ingredients,
      preparation,
      information
    }

    const recipeIndex = data.recipes.findIndex(r => r.id == id)
    data.recipes[recipeIndex] = values

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
      if (err) return res.send('Write file error!')

      callback(id)
    })
  },
  delete(id, callback) {
    const filteredInstructors = data.recipes.filter(function (recipe) {
      return recipe.id != id
    })

    data.recipes = filteredInstructors

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
      if (err) return res.send('Write file error!')

      callback()
    })
  }
}