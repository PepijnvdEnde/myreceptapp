import React from "react";
import NavBar from "../NavComponents/NavBar";
import RecipeBar from "./RecipeBar";

class RecipePage extends React.Component {
    render() {
        const recipes = [
            {
                id: 1,
                name: "Burger",
                rating: 4,
                time: 30,
                image: "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
                icons: {
                    vegetarian: false,
                    spicy: false,
                    vegan: false,
                    fish: false,
                    gluten: true,
                    dairy: true,
                    peanuts: false
                }
            },
            {
                id: 2,
                name: "Pasta",
                rating: 5,
                time: 45,
                icons: {
                    vegetarian: true,
                    spicy: false,
                    vegan: true,
                    fish: false,
                    gluten: true,
                    dairy: true,
                    peanuts: false
                }
            },
            {
                id: 3,
                name: "Spicy burger",
                rating: 4.5,
                time: 200,
                icons: {
                    vegetarian: false,
                    spicy: true,
                    vegan: false,
                    fish: false,
                    gluten: true,
                    dairy: true,
                    peanuts: false
                }
            }
        ];

        return (
            <body className="bg-gray-200">
            <NavBar/>
            <div className="flex flex-col items-center min-h-screen">
                <div className="bg-white w-3/4 min-h-screen">
                    <div className="md:grid-cols-3 grid auto-rows-auto gap-4 px-4">
                        {recipes.map((recipe, index) => (
                            <RecipeBar key={recipe.id} recipe={recipe}/>
                        ))}
                    </div>
                </div>
            </div>
            </body>
        );
    }
}

export default RecipePage;