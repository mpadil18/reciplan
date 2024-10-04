import { useState } from "react";
import { Link } from "react-router-dom";
import search from "../../assets/search.jpg";
import RecipeCard from "../RecipeCard/RecipeCard";
import "./SearchFilter.css"

import Recipes from "../../data/all_recipes.json"

export default function SearchFilter({ user }) {
  const [category, setCategory] = useState(Number(-1))
  const [categoryName, setCategoryName] = useState("")
  const mealTypes = [
    'Breakfast',
    'Main Course',
    'Side Dish',
    'Salad',
    'Appetizer',
    'Soup',
    'Finger Food',
    'Drink'
  ]

  const diets = [
    'Vegetarian',
    'Vegan',
    'Gluten Free',
    'Dairy Free'
  ]

  return (
    <div>
    <div className={`SearchFilter`} style={{ backgroundImage: `url(${search})`}}>
        <div className="filter-by">
          <div className="filter-name">Meal Types</div>
          <ul className="list-flex">
            {mealTypes.map((item, idx) => (
            <Link key={idx} to={`/search/${item}`}>
              <li>{item}</li>
            </Link>
            ))}
          </ul>
        </div>

        <div className="center">
          <div className="vl"></div>
          <Link to={`/search/View%20All`}>
            <div className="viewall">View all</div>
          </Link>
        </div>

        <div className="filter-by">
          <div className="filter-name">Diets</div>
          <ul>
            {diets.map((item, idx) => (
              <Link to={`/search/${item}`}>
                <li key={idx}>{item}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="phone-visible">
          <hr className="search-hr"></hr>
          <Link to={`/search/viewall`}>
            <div className="viewall">View all</div>
          </Link>
      </div>
    </div>
      <div className="filter-display" style={{"padding": "50px 0px 100px 0px"}}>
      {Recipes.all_recipes
          .map((r) => (
            <RecipeCard
              key={r.id}
              user={user}
              recipeInfo={r}
            />
          )
        )}
      </div>
    </div>
  )
}