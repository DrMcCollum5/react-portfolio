import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="layout">
        <Header />
        <div className="main-content">
          <Switch>
            <Route path="/" component={App} exact />
            <Route path="/portfolio" component={Projects} />
          </Switch>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
