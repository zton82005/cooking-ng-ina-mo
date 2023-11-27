import Image from 'next/image'
import recipesList from "../constants/recipesList";
// import Link from 'next/link'

const Recipes = () => {
    const recipes = recipesList
  
    return (
      <div className="flex flex-col lg:flex-row justify-center gap-10 w-full">

          {recipes.map((recipe, index) => (
            <div key={index} className="mt-5 card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{recipe.name}</h2>
                {recipe.imageUrl && (
                    <Image
                      src={recipe.imageUrl}
                      alt={`Image for ${recipe.name}`}
                      width={350}
                      height={350}
                      className="mb-5"
                    />
                  )}
                {/* <ul>
                  <li>Ingredients: {recipe.ingredients.join(', ')}</li>
                  <li>Cooking Instructions:</li>
                  <ol>
                    {recipe.cookingInstructions.map((instruction, i) => (
                      <li key={i}>{instruction}</li>
                    ))}
                  </ol>
                  <li>Serving Size: {recipe.servingSize}</li>
                  <li>Meal Type: {recipe.mealType}</li>
                  <li>Estimated Cost: ₱{recipe.estimatedCost.toFixed(2)}</li>
                  
                </ul> */}
                  <p><strong>Meal Type:</strong> {recipe.mealType}</p>
                  <p><strong>Estimated Cost:</strong> ₱{recipe.estimatedCost.toFixed(2)}</p>
                  <button className="btn btn-primary">View details</button>
              </div>
            </div>
          ))}
        
      </div>
    );
  };
  
  export default Recipes;