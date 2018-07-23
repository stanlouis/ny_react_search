const db = require("../models");

module.exports = {
  // Find all articles.js, sort them by date, send them back to the user
  findAll: function(req, res) {
    db.Article.find(req.query)
      .sort({ date: -1 })
      .then(function(dbArticle) {
        res.json(dbArticle);
      });
  },
  // Create article
  create: function(req, res) {
    console.log(req.body);
    db.Article.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  // Delete the specified article
  // delete: function(req, res) {
  //   db.Article.remove({ _id: req.params.id }).then(function(dbArticle) {
  //     res.json(dbArticle);
  //   });
  // }
};
