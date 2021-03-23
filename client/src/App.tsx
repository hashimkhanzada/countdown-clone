import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Counter } from "./features/counter/Counter";
import GlobalStyle from "./styles/globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchSection from "./components/searchSection/SearchSection";
import PageMap from "./components/pageMap/PageMap";
import Home from "./pages/HomePage/Home";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <SearchSection />
      <PageMap />

      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="browse/:category" exact component={ } /> */}
      </Switch>
    </Router>
  );
}

export default App;
