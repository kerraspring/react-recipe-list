import React, { useState, useEffect } from "react"
import RecipeList from "./components/RecipeList";
import './css/app.css';
import { v4 } from 'uuid';
import RecipeEdit from "./components/RecipeEdit";

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'

function App() {

  const [selectedRecipeId, setSelectedRecipeId] = useState()
  

  const [recipes, setRecipes] = useState(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipeJSON == null) {
      return sampleRecipes
    } else {
      return JSON.parse(recipeJSON)
    }
  })

  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)
  
  useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
    }, [recipes])

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange
  }

  function handleRecipeAdd() {
  const newRecipe = {
    id: v4(),
    name: '',
    servings: 1,
    cookTime: '',
    instructions: '',
    ingredients: [
      { id: v4(), name: '', amount: ''}
    ]
  }
  setSelectedRecipeId(newRecipe.id)
  setRecipes([...recipes, newRecipe])
}

  function handleRecipeDelete(id) {
    if (selectedRecipeId !== null && selectedRecipeId === id) {
      setSelectedRecipeId(undefined)
    }
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  function handleRecipeSelect(id) {
    setSelectedRecipeId(id)
  }

  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
    <RecipeList recipes={recipes}/>
    {selectedRecipe && <RecipeEdit recipe={selectedRecipe}/>}
    </RecipeContext.Provider>
  )
}



const sampleRecipes = [
  {
    id: 1,
    name: 'Chicken',
    servings: 2,
    cookTime: '2:00',
    instructions: '1. salt the meat\n2. cook the meat\n3. eat the meat',
    ingredients: [
      {
        id: 1,
        name: 'chicken',
        amount: '1 Lbs'
      },
      {
        id: 2,
        name: 'salt',
        amount: '1 Tbsp'
      }
    ]
  },
  {
    id: 2,
    name: 'Beef',
    servings: 3,
    cookTime: '2:30',
    instructions: '1. salt the meat\n2. cook the meat\n3. eat the meat',
    ingredients: [
      {
        id: 1,
        name: 'beef',
        amount: '1 Lbs'
      },
      {
        id: 2,
        name: 'salt',
        amount: '1 Tbsp'
      }
    ]
  },
]

export default App;
