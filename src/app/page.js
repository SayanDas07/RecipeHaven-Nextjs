import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-amber-800 mb-8">
          Welcome to Recipe Haven
        </h1>
        <p className="text-lg text-amber-700 mb-12 max-w-2xl mx-auto">
          Discover delicious recipes from around the world. Start your culinary journey today!
        </p>
        <Link 
          href="/recipe-list"
          className="inline-block px-8 py-4 bg-amber-600 text-white rounded-lg font-semibold 
                   hover:bg-amber-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Explore Recipes
        </Link>
      </div>
    </div>
  );
}
