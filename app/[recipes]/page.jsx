import recipesList from "../constants/recipesList";

const RecipeDetails = (params) => {
  return (
    <div>
        <h1>
            RecipeDetails
        </h1>
        Name: {params.name}
    </div>
  )
}

export default RecipeDetails