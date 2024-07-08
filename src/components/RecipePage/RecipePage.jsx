import React from "react";
import NavBar from "../NavComponents/NavBar";
import RecipeBar from "./RecipeBar";

class RecipePage extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="flex flex-col items-center h-screen">
                    <div className="w-3/4 border-4 bg-slate-200 h-full">
                        <RecipeBar />
                    </div>
                </div>
            </div>
        );
    }
}

export default RecipePage;