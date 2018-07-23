import axios from "axios";

const key = "8b0f90cc6ab243bbb28b6e365cf85d4e";
const BASEURL =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  key +
  "&q=";
export default {
  getArticles: (query, startYear, endYear) => {
    const queryUrl =
      BASEURL + query + "&begin_date" + startYear + "&end_date" + endYear;
    return axios.get(queryUrl);
  },
  getSavedArticles: () => {
    return axios.get("/api/articles");
  },
  saveArticle: articleDataToSave =>
    axios.post("/api/articles", articleDataToSave)
};
