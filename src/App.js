import React from "react"
import RecipeList from "./components/RecipeList";
import './css/app.css'


function App() {

  return (
    <RecipeList recipes={sampleRecipes}/>
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
