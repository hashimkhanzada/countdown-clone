import React from "react";
import Navbar from "./components/navbar/Navbar";
import { cartSlice } from "./features/cart/cartSlice";
import GlobalStyle from "./styles/globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchSection from "./components/searchSection/SearchSection";
import PageMap from "./components/pageMap/PageMap";
import Home from "./pages/HomePage/Home";
import Browse from "./pages/BrowsePage/Browse";
import Product from "./pages/BrowsePage/ProductPage/Product";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <SearchSection />
      <PageMap />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" exact component={Product} />
        <Route path="/browse/:mainCategory" exact component={Browse} />
      </Switch>
    </Router>
  );
}

export default App;
