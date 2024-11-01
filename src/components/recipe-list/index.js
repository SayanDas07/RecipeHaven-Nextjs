import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function RecipeList({ recips }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold text-amber-800">Our Recipes</h2>
          <Link 
            href="/"
            className="px-4 py-2 text-amber-600 hover:text-amber-800 font-medium 
                     flex items-center gap-2 transition-colors duration-300"
          >
            ← Back Home
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recips?.map((recipe) => (
            <Link href={`/recipe-list/${recipe.id}`} key={recipe.id}>
              <Card className="h-full transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-0 h-full">
                  <div className="relative h-48 sm:h-56">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                      <span className="text-amber-600 font-semibold">
                        ★ {recipe.rating}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {recipe.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                        {recipe.cuisine}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}