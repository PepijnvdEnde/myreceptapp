import React from "react";
import NavBar from "../NavComponents/NavBar";
import {setStars} from "../util/iconUtil";
import {Link} from "react-router-dom";
import {FaArrowLeft} from "react-icons/fa";

class RecipePage extends React.Component {
    searchParams = new URLSearchParams(window.location.search);
    id = this.searchParams.get("id");
    state = {
        data: [],
        loading: true,
        error: null,
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
                this.setState({ data: data, loading: false });
            })
            .catch((error) => {
                this.setState({ error: error.message, loading: false });
            });
    }
    
    render() {
        const { data, loading, error } = this.state;
        return (
            <body className="bg-gray-200">
                <NavBar />
                <div className="flex flex-col items-center min-h-screen">
                    <div className="bg-white w-3/4 min-h-screen">
                        <div className=" ">
                            {loading && <p>Loading recipe...</p>}
                            {error && <p className="text-red-500">Error: {error}</p>}
                            {!loading &&
                                !error && (<div className="mb-3">
                                        <Link to="/recepten" className="block mt-4 ml-4">
                                            <FaArrowLeft />
                                        </Link>
                                        {
                                            <div key={data.id} className="bg-white p-4 rounded-lg shadow-md">
                                                <h1 className="text-2xl font-bold">{data.name}</h1>
                                                <img src={data.image} alt={data.title} className="w-full h-64 object-cover mt-2"/>
                                                <p className="text-sm text-gray-500">Door: {data.author}</p>
                                                <p className="flex items-center my-2">Beoordeling: {setStars(data.rating)}</p>
                                                <p className="flex items-center mb-2">Tijd: {data.time} minutes</p>
                                                <p className="text-sm mt-2">{data.description}</p>
                                                <div className="mt-4">
                                                    <h2 className="text-lg font-bold">Ingrediënten</h2>
                                                    <ul className="list-disc ml-4">
                                                        {data.ingredients.map((ingredient) => (
                                                            <li key={ingredient.id}>{ingredient.name} - {ingredient.amount} {ingredient.unit}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="mt-4">
                                                    <h2 className="text-lg font-bold">Instructies</h2>
                                                    <ol className="list-decimal ml-4">
                                                        {data.steps.map((instruction) => (
                                                            <li>{instruction}</li>
                                                        ))}
                                                    </ol>
                                                </div>
                                            </div>
                                        }</div>
                                )}
                        </div>
                    </div>
                </div>
            </body>
        );
    }
}

export default RecipePage;