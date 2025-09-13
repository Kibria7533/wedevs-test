import axios from "axios";
import errorHandler from "../helpers/errorHandler";
const BASE_URL=process.env.REACT_APP_API_URI

// prettier-ignore
async function getArticles({ headers, limit = 3, location, page = 0, tagName, username }) {
  try {
    const url = {
      favorites: `api/articles?favorited=${username}&&limit=${limit}&&offset=${page}`,
      feed: `api/articles/feed?limit=${limit}&&offset=${page}`,
      global: `api/articles?limit=${limit}&&offset=${page}`,
      profile: `api/articles?author=${username}&&limit=${limit}&&offset=${page}`,
      tag: `api/articles?tag=${tagName}&&limit=${limit}&&offset=${page}`,
    };

    const { data } = await axios({  baseURL: BASE_URL, url: url[location], headers });

    return data;
  } catch (error) {
    errorHandler(error);
  }
}

export default getArticles;
