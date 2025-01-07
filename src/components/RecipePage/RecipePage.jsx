import React from "react";
import NavBar from "../NavComponents/NavBar";
import {Link} from "react-router-dom";
import {FaArrowLeft} from "react-icons/fa";
import InstructionPanel from "./InstructionPanel";
import IngredientList from "./IngredientList";
import IntroCard from "./IntroCard";

class RecipePage extends React.Component {
    searchParams = new URLSearchParams(window.location.search);
    id = this.searchParams.get("id");
    state = {
        data: [], loading: true, error: null,
    };

    componentDidMount() {
        fetch("http://localhost:8080/recipe?id=" + this.id)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                this.setState({data: data, loading: false});
            })
            .catch((error) => {
                this.setState({error: error.message, loading: false});
            });
    }

    render() {
        const {data, loading, error} = this.state;

        return (
        <body className="bg-gray-200">
            <NavBar/>
            <div className="flex flex-col items-center min-h-screen">
                <div className="bg-[#FAF8F6] w-3/4 min-h-screen">
                    <div className="">
                        {loading && <p>Loading recipe...</p>}
                        {error && <p className="text-red-500">Error: {error}</p>}
                        {!loading && !error && (<div>
                            <Link to="/recepten" className="block mt-4 ml-4 sticky top-20">
                                <FaArrowLeft/>
                            </Link>
                            {<div key={data.id} className="p-4 grid-rows-3">
                                    <IntroCard data={data}/>
                                <div className="w-full flex justify-center pt-3 gap-2">
                                    <InstructionPanel data={data}/>
                                    <IngredientList data={data}/>
                                </div>

                                <div className="w-full flex justify-center pt-3">
                                    <div className="bg-gray-200 rounded-lg h-min p-2 w-1/2 ">
                                        <h2 className="text-lg font-bold">Over het gerecht</h2>
                                        {data.description}
                                    </div>
                                </div>
                            </div>}
                        </div>)}
                    </div>
                </div>
            </div>
        </body>);
    }
}

export default RecipePage;