import React from "react";
import {FaRegClock, FaRegStar, FaStar, FaStarHalfAlt} from 'react-icons/fa';

class RecipeBar extends React.Component {
    setStars = (rating) => {
        let stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const totalStars = hasHalfStar ? fullStars + 1 : fullStars;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar />);
        }

        if (hasHalfStar) {
            stars.push(<FaStarHalfAlt />);
        }

        for (let i = 0; i < 5 - totalStars; i++) {
            stars.push(<FaRegStar />);
        }

        return stars;
    }

    render() {
        return (
            <div className="flex flex-row border-2 border-black rounded-2xl bg-white h-28 w-1/2">
                <img src="https://via.placeholder.com/100" className="rounded-l-2xl h-full" alt="Recipe"/>
                <div className="flex flex-col w-full h-full rounded-r-2xl ">
                    <div className="rounded-tr-2xl border-b-2 border-black pl-2 pb-2">
                        <p>Recipe name</p>
                    </div>
                    <div className="flex-grow flex rounded-br-2xl pl-2">
                        <div className="flex flex-col justify-around px-2">
                            <div className="flex items-center">
                                <FaRegClock/> <p className="text-lg ml-1">1:00</p>
                            </div>
                            <div className="flex items-center">
                                {this.setStars(2.5)}
                            </div>
                        </div>
                        <div className="flex flex-col rounded-br-2xl">
                            <p>Ingredients: foo, bar, baz, qux, quux, corge, grault, garply, waldo, fred, plugh, xyzzy, thud</p>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecipeBar;