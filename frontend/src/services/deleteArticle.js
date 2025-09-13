import axios from "axios";
import errorHandler from "../helpers/errorHandler";
const BASE_URL=process.env.REACT_APP_API_URI

async function deleteArticle({ slug, headers }) {
  try {
    const { data } = await axios({
      baseURL: BASE_URL,
      headers,
      method: "DELETE",
      url: `api/articles/${slug}/`,
    });

    return data;
  } catch (error) {
    errorHandler(error);
  }
}

export default deleteArticle;
