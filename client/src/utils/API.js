import axios from "axios";

const key = "8b0f90cc6ab243bbb28b6e365cf85d4e";
const BASEURL =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  key +
  "&q=";
export default {
  getArticles: query => axios.get(BASEURL + query)
};
