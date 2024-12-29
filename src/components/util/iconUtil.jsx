import {FaFish, FaLeaf, FaPepperHot, FaRegStar, FaSeedling, FaStar, FaStarHalfAlt} from "react-icons/fa";
import {FaWheatAwn} from "react-icons/fa6";
import {LuMilk} from "react-icons/lu";
import {GiPeanut} from "react-icons/gi";
import React from "react";

export function setStars (rating) {
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

export function convertMinutesToHours(minutes) {
    if (minutes === undefined) {
        minutes = 0;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60 < 10 ? `0${minutes % 60}` : minutes % 60;

    return `${hours}:${remainingMinutes}`;
}

export function showTags(tags) {
    const iconArray = [];

    tags.forEach((tag) => {
        switch (tag) {
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
    });

    return iconArray;
}