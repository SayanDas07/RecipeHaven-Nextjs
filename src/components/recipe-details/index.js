import Link from "next/link";

export default function RecipeDetailsItem({ getRecipeDetails }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-8">
      <div className="container mx-auto px-4">
        <Link 
          href="/recipe-list"
          className="inline-flex items-center text-amber-600 hover:text-amber-800 
                   font-medium mb-8 transition-colors duration-300"
        >
          ← Back to Recipes
        </Link>
        
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative h-[400px] lg:h-full">
              <img
                src={getRecipeDetails?.image}
                alt={getRecipeDetails?.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <div className="flex flex-col h-full">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {getRecipeDetails?.name}
                </h2>
                
                <div className="flex gap-4 mb-6">
                  <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full">
                    {getRecipeDetails?.mealType[0]}
                  </span>
                  <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full">
                    {getRecipeDetails?.cuisine}
                  </span>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Ingredients
                  </h3>
                  <ul className="space-y-3">
                    {getRecipeDetails?.ingredients.map((item, index) => (
                      <li 
                        key={`ingredient-${index}`}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}