import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import ArticleSearchForm from "./components/ArticlesSearchForm/ArticlesSearchForm";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ArticleSearchForm} />
        <Route exact path="/articles" component={ArticleSearchForm} />
        <Route exact path="/articles/:id" component={ArticleSearchForm} />
      </Switch>
    </div>
  </Router>
);

export default App;
