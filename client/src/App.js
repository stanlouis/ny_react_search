import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import ArticleSearchForm from "./components/ArticlesSearchForm/ArticlesSearchForm";
import "./App.css";
import SavedArticles from "./components/SavedArticles/SavedArticles";

// class App extends Component {
//   render() {
//     return (
//       <div className="container">
//         <Header />
//         <ArticleSearchForm />
//         <SavedArticles />
//       </div>
//     );
//   }
// }

const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ArticleSearchForm} />
        <Route exact path="/articles" component={ArticleSearchForm} />
      </Switch>
    </div>
  </Router>
);

export default App;
