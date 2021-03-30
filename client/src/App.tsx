import React from "react";
import Navbar from "./components/navbar/Navbar";
import GlobalStyle from "./styles/globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchSection from "./components/searchSection/SearchSection";
import Footer from "./components/footer/Footer";

import {
  HomePage,
  BrowsePage,
  CartPage,
  CheckoutPage,
  LoginPage,
  RegisterPage,
  OrderHistoryPage,
  PaymentPage,
  ProductPage,
  ReceiptPage,
  OrderDetailsPage,
} from "./pages/index";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <SearchSection />

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/reviewcart" exact component={CartPage} />
        <Route path="/checkout" exact component={CheckoutPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/payment" exact component={PaymentPage} />
        <Route path="/receipt" exact component={ReceiptPage} />
        <Route path="/orderhistory" exact component={OrderHistoryPage} />
        <Route
          path="/orderhistory/:orderId"
          exact
          component={OrderDetailsPage}
        />
        <Route path="/product/:id" exact component={ProductPage} />
        <Route path="/browse/:mainCategory" exact component={BrowsePage} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
