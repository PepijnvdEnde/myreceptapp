import React from "react";
import { FaFish, FaLeaf, FaPepperHot, FaRegClock, FaRegStar, FaSeedling, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { FaWheatAwn } from "react-icons/fa6";
import { LuMilk } from "react-icons/lu";
import { GiPeanut } from "react-icons/gi";

class RecipeBar extends React.Component {
    setStars = (rating) => {
        if (rating  === undefined) {
            rating = 0;
        }
        let stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const totalStars = hasHalfStar ? fullStars + 1 : fullStars;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={`full-${i}`} />);
        }

        if (hasHalfStar) {
            stars.push(<FaStarHalfAlt key="half" />);
        }

        for (let i = 0; i < 5 - totalStars; i++) {
            stars.push(<FaRegStar key={`empty-${i}`} />);
        }

        return stars;
    }

    convertMinutesToHours = (minutes) => {
        if (minutes === undefined) {
            minutes = 0;
        }
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60 < 10 ? `0${minutes % 60}` : minutes % 60;

        return `${hours}:${remainingMinutes}`;
    }

    showIcons = (icons) => {
        let iconArray = [];

        for (const icon in icons) {
            if (icons[icon]) {
                switch (icon) {
                    case "vegetarian":
                        iconArray.push(<FaSeedling className="text-green-400" title="Vegetarian" key="vegetarian" />);
                        break;
                    case "spicy":
                        iconArray.push(<FaPepperHot className="text-red-400" title="Spicy" key="spicy" />);
                        break;
                    case "vegan":
                        iconArray.push(<FaLeaf className="text-green-600" title="Vegan" key="vegan" />);
                        break;
                    case "fish":
                        iconArray.push(<FaFish className="text-blue-500" title="Contains Fish" key="fish" />);
                        break;
                    case "gluten":
                        iconArray.push(<FaWheatAwn className="text-amber-300" title="Contains Gluten" key="gluten" />);
                        break;
                    case "dairy":
                        iconArray.push(<LuMilk title="Contains Dairy" key="dairy" />);
                        break;
                    case "peanuts":
                        iconArray.push(<GiPeanut className="text-yellow-900" title="Contains Peanuts" key="peanuts" />);
                        break;
                    default:
                        break;
                }
            }
        }

        return iconArray;
    }

    render() {
        const { name, rating, time, image, icons } = this.props.recipe;

        return (
            <div className="flex flex-row bg-white shadow-lg rounded-lg overflow-hidden w-fill h-40">
                <img src={image ?? "https://via.placeholder.com/200" } className="w-1/3 h-auto object-cover" alt="Recipe" />
                <div className="flex flex-col w-2/3 p-4">
                    <div className="mb-2">
                        <p className="text-xl font-semibold">{name ?? "No name given."}</p>
                    </div>
                    <div className="flex-grow">
                        <div className="flex items-center text-sm mb-2">
                            <FaRegClock className="text-gray-500 mr-2" /> <p>{this.convertMinutesToHours(time)}</p>
                        </div>
                        <div className="flex items-center mb-2">
                            {this.setStars(rating)}
                        </div>
                        <div className="flex w-1/2 justify-start gap-1">
                            {this.showIcons(icons)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

RecipeBar.propTypes = {
    recipe: PropTypes.object.isRequired
}

export default RecipeBar;