import { useState } from "react"
import { useParams } from "react-router"
import RecipeCard from "../../RecipeCard/RecipeCard";
import navbar from "../../../assets/navbar.jpg"
import "./FilterResults.css"

export default function FilterResults({ user, recipes, handleSave, handleUnsave }) {
  const { categoryType } = useParams()

  const data = [
    'Vegetarian',
    'Vegan',
    'Gluten Free',
    'Dairy Free',
    'Breakfast',
    'Main Course',
    'Side Dish',
    'Salad',
    'Appetizer',
    'Soup',
    'Finger Food',
    'Drink'
  ]

  // const data = [
  //   'Vegetarian',
  //   'Vegan',
  //   'Gluten Free',
  //   'Dairy Free',
  //   'Breakfast',
  //   'Main Course',
  //   'Side Dish',
  //   'Salad',
  //   'Appetizer',
  //   'Soup',
  //   'Finger Food',
  //   'Drink'
  // ]

  // // const [category, setCategory] = useState(categoryType !== "View All" ? (1 << (11 - data.indexOf(categoryType))) : 0)
  // const [selectedCategories, setSelectedCategories] = []
  // const [currRecipes, setCurrRecipes] = []
  // const filterByCategory = () => {
  //   setCurrRecipes([])
  //   for (let curr_category = 0; curr_category < selectedCategories.length; curr_category++) {
  //     for (let curr_recipe = 0; curr_recipe < Recipes.all_recipes.length; curr_recipe++) {
  //       if ((selectedCategories[curr_category] in Recipes[curr_recipe].category)) {
  //         setCurrRecipes(currRecipes.push(Recipes[curr_recipe]))
  //       }
  //     }
  //   }
  // }

  console.log(categoryType)

  // const [category, setCategory] = useState(categoryType !== "View All" ? (1 << (11 - data.indexOf(categoryType))) : 0)

  return (
    <div className="FilterResults" style={{backgroundImage: `url(${navbar})`}}>
      <div className="filter-display-name">
        {recipes
            .filter(recipe => categoryType === recipe.category).length <= 0 && categoryType !== "View All" ? 
            <div className="results">No results for {categoryType}
            </div> 
            : 
            <div className="results">{categoryType ? categoryType : <>All Recipes</>} 
            </div> 
          
        }
        <div className="filter-display">
          {categoryType === "View All" ? 
        
          recipes
            .map((r) => (
              <RecipeCard
                key={r.id}
                user={user}
                recipeInfo={r}
                handleSave={handleSave}
                handleUnsave={handleUnsave}
              />
            )
          ) 
          :
          recipes
            .filter(recipe => categoryType === recipe.category)
            .map((r) => (
              <RecipeCard
                key={r.id}
                user={user}
                recipeInfo={r}
                handleSave={handleSave}
                handleUnsave={handleUnsave}
              />
            )
          )        
          }
        {/* {
          recipes
            .filter(recipe => categoryType === recipe.category)
            .map((r) => (
              <RecipeCard
                key={r.id}
                user={user}
                recipeInfo={r}
                handleSave={handleSave}
                handleUnsave={handleUnsave}
              />
            )
          ) 
        } */}
        </div>
      </div>
    </div>
  )
}