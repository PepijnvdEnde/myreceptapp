import {BrowserRouter, Route, Routes} from "react-router-dom";

import HomePage from "./HomePage/HomePage.jsx";
import RecipesPage from "./RecipesPage/RecipesPage";
import RecipePage from "./RecipePage/RecipePage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/recepten" element={<RecipesPage />} />
                <Route path="/recept" element={<RecipePage />} />
                <Route path="/lijst" element={<HomePage />} />
                <Route path="/profiel" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
