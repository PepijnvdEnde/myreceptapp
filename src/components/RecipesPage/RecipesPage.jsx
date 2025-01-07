import React from "react";
import NavBar from "../NavComponents/NavBar";
import RecipeBar from "./RecipeBar";

class RecipesPage extends React.Component {
    state = {
        recipes: [], 
        loading: true,
        error: null, 
    };
    
    componentDidMount() {
        fetch("http://localhost:8080/recipes")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                this.setState({ recipes: data, loading: false });
            })
            .catch((error) => {
                this.setState({ error: error.message, loading: false });
            });
    }

    render() {
        const { recipes, loading, error } = this.state;

        return (
            <body className="bg-gray-200">
            <NavBar />
            <div className="flex flex-col items-center min-h-screen">
                <div className="bg-[#FAF8F6] w-3/4 min-h-screen pt-3">
                    <div className="md:grid-cols-3 grid auto-rows-auto gap-4 px-4">
                        {loading && <p>Loading recipes...</p>}
                        {error && <p className="text-red-500">Error: {error}</p>}
                        {!loading &&
                            !error &&
                            recipes.map((recipe) => (
                                <RecipeBar key={recipe.id} recipe={recipe} />
                            ))}
                    </div>
                </div>
            </div>
            </body>
        );
    }
}

export default RecipesPage;
 