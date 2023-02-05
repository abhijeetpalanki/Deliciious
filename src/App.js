import React from "react";
import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";

const App = () => {
  return (
    <div>
      <Search />
      <Category />
      <Pages />
    </div>
  );
};

export default App;
