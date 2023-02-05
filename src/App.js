import React from "react";
import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import styled from "styled-components";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Logo to={"/"}>
        <Nav>
          <img src="/logo.png" alt="logo" />
          <span>delicious</span>
        </Nav>
      </Logo>
      <Search />
      <Category />
      <Pages />
    </div>
  );
};

const Logo = styled(Link)`
  text-decoration: none;
`;

const Nav = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 50px;
    width: 50px;
  }

  span {
    font-size: 2rem;
    font-weight: 400;
    font-family: "Lobster Two", cursive;
  }
`;

export default App;
