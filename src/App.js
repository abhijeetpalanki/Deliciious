import React from "react";
import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import styled from "styled-components";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Nav>
        <img src="/logo.png" alt="logo" />
        <Logo to={"/"}>Delicious</Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
    </div>
  );
};

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    height: 50px;
    width: 50px;
  }
`;

export default App;
