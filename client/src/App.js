import React, { Component } from "react";
import Header from "./components/Header/Header";
import ArticleSearchForm from "./components/ArticlesSearchForm/ArticlesSearchForm";
import "./App.css";
import SavedArticles from "./components/SavedArticles/SavedArticles";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <ArticleSearchForm />
        <SavedArticles />
      </div>
    );
  }
}

export default App;
