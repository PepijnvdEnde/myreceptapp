import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {FaRegClock} from "react-icons/fa";
import {setStars, showTags, convertMinutesToHours} from "../util/iconUtil";
class RecipeBar extends React.Component {
    

    render() {
        const { id, name, rating, time, image, tags } = this.props.recipe;

        return (
            <Link to={`/recept?id=${id}`} className="block">
                <div className="flex flex-row bg-white shadow-lg rounded-lg overflow-hidden w-fill h-40 hover:shadow-xl transition-shadow duration-300">
                    <img src={image ?? "https://via.placeholder.com/200"} className="w-1/3 h-auto object-cover" alt="Recipe"/>
                    <div className="flex flex-col w-2/3 p-4">
                        <div className="mb-2">
                            <p className="text-xl font-semibold">{name ?? "No name given."}</p>
                        </div>
                        <div className="flex-grow">
                            <div className="flex items-center text-sm mb-2">
                                <FaRegClock className="text-gray-500 mr-2"/> <p>{convertMinutesToHours(time)}</p>
                            </div>
                            <div className="flex items-center mb-2">
                                {setStars(rating)}
                            </div>
                            <div className="flex w-1/2 justify-start gap-1">
                                {showTags(tags)}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}

RecipeBar.propTypes = {
    recipe: PropTypes.object.isRequired
}

export default RecipeBar;