import React from 'react';

const ArticleSearchForm = () => (
  <div class="row">
    <div class="col-sm-12">
      <br />

      <div class="card">
        <div class="card-header">
          <strong>
            <i class="fa fa-list-alt" /> Search Parameters
          </strong>
        </div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="search">Search Term:</label>
              <input type="text" class="form-control" id="search-term" />
            </div>

            <div class="form-group">
              <label for="start-year">Start Year (Optional):</label>
              <input type="text" class="form-control" id="start-year" />
            </div>

            <div class="form-group">
              <label for="end-year">End Year (Optional):</label>
              <input type="text" class="form-control" id="end-year" />
            </div>

            <button type="submit" class="btn btn-default" id="run-search">
              <i class="fa fa-search" /> Search
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default ArticleSearchForm;
