import {convertMinutesToHours, setStars, showTags} from "../util/iconUtil";
import React from "react";
import {FaRegClock} from "react-icons/fa";

const IntroCard = ({data}) => {

    return (
        <div className="flex justify-center">
            <div className="flex-col w-1/2 bg-gray-200 rounded-lg p-2">
                <img src={data.image} alt={data.name} className="w-fill rounded-lg object-cover "/>
                <div>
                    <div className="flex gap-5">
                        <h1 className="text-2xl font-bold">{data.name}</h1>
                        <p className="flex items-center my-2 h-fill pt-1 text-[#5578f0]">{setStars(data.rating)}</p>
                        <div className="flex items-center text-sm h-fill pt-1">
                            <FaRegClock className="text-gray-500 mr-2"/> {convertMinutesToHours(data.time)}
                        </div>
                    </div>
                    <div className="flex w-1/2 justify-start gap-1">
                        {showTags(data.tags)}
                    </div>
                    <p className="text-sm">Door: {data.author}</p>
                    <p className="text-sm mt-2  flex">{data.shortDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default IntroCard;