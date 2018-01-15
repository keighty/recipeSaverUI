
const recipeArray = [
  require('./test-recipe-2.json'),
  require('./test-recipe-1.json'),
  require('./test-recipe-3.json')
]

const recipes = recipeArray.reduce((acc, recipe) => {
  const { id } = recipe
  acc[id] = recipe
  return acc
}, {})

export default recipes
