import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Counter } from "./features/counter/Counter";
import GlobalStyle from "./styles/globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchSection from "./components/searchSection/SearchSection";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <SearchSection />
    </Router>
  );
}

export default App;
