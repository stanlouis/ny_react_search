import React, { Component } from "react";
import API from "../../utils/API";
import Results from "../Results/Results";

class ArticlesSearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      topic: ""
    };
  }

  onSearchChange = e => {
    this.setState({ topic: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    API.getArticles(this.state.topic)
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
                    <input
                      type="text"
                      className="form-control"
                      id="start-year"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="end-year">End Year (Optional):</label>
                    <input type="text" className="form-control" id="end-year" />
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
        <Results articles={this.state.articles} />
      </div>
    );
  }
}

export default ArticlesSearchForm;
