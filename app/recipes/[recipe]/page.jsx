// Static params generated on server for faster loading
// export async function generateStaticParams() {
//   return [{recipe: "recipe-one"}, {recipe: "recipe-two"}, {recipe: "recipe-three"}]
// }

// Dynamic params to catch any strings
const RecipeDetails = ({params}) => {
  return (
    <div>
        <h1>Name: {params.recipe}</h1>
    </div>
  )
}

export default RecipeDetails