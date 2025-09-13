import axios from "axios";
import errorHandler from "../helpers/errorHandler";
const BASE_URL=process.env.REACT_APP_API_URI

async function getArticle({ headers, slug }) {
  try {
    const { data } = await axios({ baseURL: BASE_URL, headers, url: `api/articles/${slug}` });

    return data.article;
  } catch (error) {
    errorHandler(error);
  }
}

export default getArticle;
