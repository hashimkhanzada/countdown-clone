import React from "react";
import Navbar from "./components/navbar/Navbar";
import SearchBar from "./components/searchBar/SearchBar";
import { Counter } from "./features/counter/Counter";
import GlobalStyle from "./styles/globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <SearchBar />
    </Router>
  );
}

export default App;
