import axios from "axios";
import errorHandler from "../helpers/errorHandler";
const BASE_URL=process.env.REACT_APP_API_URI

async function setArticle({ body, description, headers, slug, tagList, title }) {
  try {
    const { data } = await axios({
     baseURL: BASE_URL,
      data: { article: { title, description, body, tagList } },
      headers,
      method: slug ? "PUT" : "POST",
      url: slug ? `api/articles/${slug}` : "api/articles",
    });

    return data.article.slug;
  } catch (error) {
    errorHandler(error);
  }
}

export default setArticle;
