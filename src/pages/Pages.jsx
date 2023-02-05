import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Results from "./Results";
import Recipe from "./Recipe";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/search-results/:searchTerm" element={<Results />} />
      <Route path="/recipe/:name" element={<Recipe />} />
    </Routes>
  );
};

export default Pages;
