import axios from "axios";
import errorHandler from "../helpers/errorHandler";
const BASE_URL=process.env.REACT_APP_API_URI

async function toggleFav({ slug, favorited, headers }) {
  try {
    const { data } = await axios({
     baseURL: BASE_URL,
      headers,
      method: favorited ? "DELETE" : "POST",
      url: `api/articles/${slug}/favorite`,
    });

    return data.article;
  } catch (error) {
    errorHandler(error);
  }
}

export default toggleFav;
