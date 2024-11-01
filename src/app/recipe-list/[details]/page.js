import RecipeDetailsItem from "@/components/recipe-details";

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

async function fetchRecipeDetails(currentRecipeId) {
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/recipes/${currentRecipeId}`,
      {
        cache: 'no-store'
      }
    );

    if (!apiResponse.ok) {
      throw new Error('Failed to fetch recipe');
    }

    return apiResponse.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export default async function RecipeDetails(props) {
  const details = props.params?.details;
  
  if (!details) {
    return <div>Recipe not found</div>;
  }

  try {
    const getRecipeDetails = await fetchRecipeDetails(details);
    
    if (!getRecipeDetails) {
      return <div>Recipe not found</div>;
    }

    return <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />;
  } catch (error) {
    return <div>Error loading recipe: {error.message}</div>;
  }
}