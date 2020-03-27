const express = require('express')
const routes = express.Router()
const home = require('./app/controllers/home')
const recipe = require('./app/controllers/recipe')
const recipes = require('./app/controllers/recipes')

routes.get('/', home.index)
routes.get('/about', home.about)

routes.get('/recipes', recipe.index)
routes.get('/recipe/:index', recipe.show)

routes.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita

routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
routes.put("/admin/recipes", recipes.put); // Editar uma receita
routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita

routes.use((req, res) => {
  res.status(404).render('not-found')
})

module.exports = routes