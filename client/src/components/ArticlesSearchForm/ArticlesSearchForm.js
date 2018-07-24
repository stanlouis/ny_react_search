import React, { Component } from "react";
import API from "../../utils/API";
import Results from "../Results/Results";
import SavedArticles from "../SavedArticles/SavedArticles";

class ArticlesSearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      savedArticles: [],
      topic: "",
      startYear: "20180101",
      endYear: "20180101"
    };
  }

  loadSavedArticles = () => {
    API.getSavedArticles().then(res =>
      this.setState({ savedArticles: res.data })
    );
  };

  onSearchChange = e => {
    this.setState({ topic: e.target.value });
  };

  onStartYear = e => {
    this.setState({ startYear: e.target.value });
    console.log(e.target.value);
  };

  onEndYear = e => {
    this.setState({ endYear: e.target.value });
    console.log(e.target.value);
  };

  onFormSubmit = e => {
    e.preventDefault();
    API.getArticles(this.state.topic, this.state.startYear, this.state.endYear)
      .then(res => {
        const data = res.data.response.docs;
        const articlesLimit = [];

        for (var i = 0; i < 5; i++) {
          articlesLimit.push(data[i]);
        }

        this.setState({ articles: articlesLimit });
      })
      .catch(err => console.log(err));
  };

  onSaveArticle = article => {
    console.log(article);
    API.saveArticle({
      article: article.headline.main,
      url: article.web_url,
      date: article.pub_date
    })
      .then(res => this.loadSavedArticles())
      .catch(err => console.log(err));
  };

  onDeleteSavedArticle = id => {
    console.log(id);
    API.deleteArticle(id)
      .then(res => this.loadSavedArticles())
      .catch(err => console.log(err));
  };

  componentDidMount() {
    //axios request to database
    API.getSavedArticles().then(response => {
      console.log(response);
      this.setState({
        savedArticles: response.data
      });
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <br />

            <div className="card">
              <div className="card-header">
                <strong>
                  <i className="fa fa-list-alt" /> Search Parameters
                </strong>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="search">Search Term:</label>
                    <input
                      onChange={this.onSearchChange}
                      type="text"
                      className="form-control"
                      id="search-term"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="start-year">Start Year (Optional):</label>
                    <select
                      value={this.state.startYear}
                      onChange={this.onStartYear}
                    >
                      <option value="20080101">2008</option>
                      <option value="20090101">2009</option>
                      <option value="20100101">2010</option>
                      <option value="20110101">2011</option>
                      <option value="20120101">2012</option>
                      <option value="20130101">2013</option>
                      <option value="20140101">2014</option>
                      <option value="20150101">2015</option>
                      <option value="20160101">2016</option>
                      <option value="20170101">2017</option>
                      <option value="20180101">2018</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="end-year">End Year (Optional):</label>
                    <select
                      name="EndYear"
                      value={this.state.endYear}
                      onChange={this.onEndYear}
                    >
                      <option value="20180101">2018</option>
                      <option value="20170101">2017</option>
                      <option value="20160101">2016</option>
                      <option value="20150101">2015</option>
                      <option value="20140101">2014</option>
                      <option value="20130101">2013</option>
                      <option value="20120101">2012</option>
                      <option value="20110101">2011</option>
                      <option value="20100101">2010</option>
                      <option value="20090101">2009</option>
                      <option value="20080101">2008</option>
                    </select>
                  </div>

                  <button
                    className="btn btn-default"
                    onClick={this.onFormSubmit}
                  >
                    <i className="fa fa-search" /> Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*Results components*/}
        <Results
          articles={this.state.articles}
          onSaveArticle={this.onSaveArticle}
        />
        {/*SavedArticles components*/}
        <SavedArticles
          savedArticles={this.state.savedArticles}
          onDeleteSavedArticle={this.onDeleteSavedArticle}
        />
      </div>
    );
  }
}

export default ArticlesSearchForm;
