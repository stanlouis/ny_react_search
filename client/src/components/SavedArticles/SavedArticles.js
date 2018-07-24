import React from "react";

const SavedArticles = ({ savedArticles, onDeleteSavedArticle }) => {
  let artilceList = savedArticles.map(article => (
    <li
      key={article._id}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <p className="lead">
        <a href={article.url} target="_blank">
          {article.article}
        </a>
      </p>
      <button
        className="btn-primary"
        onClick={() => onDeleteSavedArticle(article._id)}
      >
        Delete
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
              <i className="fa fa-table" /> Saved Articles
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

export default SavedArticles;
