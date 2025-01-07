import {makeGradient} from "../util/iconUtil";
import React from "react";

const IngredientList = ({data}) => {
    
    return (
        <div className="w-max bg-gray-200 rounded-lg h-min p-2">
            <h2 className="text-lg font-bold">Ingrediënten</h2>
            <ul className="list-disc ml-4 pb-1">
                {data.ingredients.map((ingredient, index) => (<li key={index} className="relative flex items-center group my-1">
                    <span className={`w-2.5 h-2.5 ${makeGradient(ingredient.tags)} rounded-full mr-2`}></span>
                    {ingredient.tags && ingredient.tags.length > 0 && (<div
                        className="absolute left-5 top-0 hidden group-hover:flex items-center bg-gray-800 text-white text-sm rounded px-1 py-1 z-10">
                        {ingredient.tags.join(', ')}
                    </div>)}
                    {ingredient.name} - {ingredient.amount} {ingredient.unit}
                </li>))}
            </ul>
        </div>
    );
};

export default IngredientList;