import Home from "./Home";
import Cuisine from "./Cuisine";
import Category from "../components/Category";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
    </Routes>
  );
};

export default Pages;
