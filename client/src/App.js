import React, { Component } from 'react';
import Header from "./components/Header/Header"
import ArticleSearchForm from "./components/ArticlesSearchForm/ArticlesSearchForm"
import './App.css';
import Results from './components/Results/Results';
import SavedArticles from './components/SavedArticles/SavedArticles';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <ArticleSearchForm />
        <Results />
        <SavedArticles />
      </div>
    );
  }
}

export default App;
