import React from "react";

const Result = ({ articles, onSaveArticle }) => {
  let artilceList = articles.map(article => (
    <li
      key={article._id}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <p className="lead">
        <a href={article.web_url} target="_blank">
          {article.headline.main}
        </a>
      </p>
      <button className="btn-primary" onClick={() => onSaveArticle(article)}>
        Save
      </button>
    </li>
  ));

  return (
    <div className="row">
      <div className="col-sm-12">
        <br />
        <div className="card">
          <div className="card-header">
            <strong>
              <i className="fa fa-table" /> Articles Search Results
            </strong>
          </div>
          <div className="card-body" id="article-section">
            <ul className="list-group">{artilceList}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
