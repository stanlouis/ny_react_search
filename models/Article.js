// Article model
// ==============

// Require mongoose
const mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
const Schema = mongoose.Schema;

// Create the headlineSchema with our schema class
const ArticleSchema = new Schema({
  // article, a string, must be entered
  article: {
    type: String,
    required: true,
    unique: { index: { unique: true } }
  },
  // url, a string, must be entered
  url: {
    type: String,
    required: true
  },
  // date is just a string
  date: {
    type: String
  }
});

// Create the Headline model using the ArticleSchema
const Article = mongoose.model("Article", ArticleSchema);

// Export the Headline model
module.exports = Article;
