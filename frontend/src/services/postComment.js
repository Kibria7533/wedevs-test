import axios from "axios";
import errorHandler from "../helpers/errorHandler";
const BASE_URL=process.env.REACT_APP_API_URI

async function postComment({ body, headers, slug }) {
  try {
    const { data } = await axios({
     baseURL: BASE_URL,
      data: { comment: { body } },
      headers,
      method: "POST",
      url: `api/articles/${slug}/comments`,
    });

    return data.comment;
  } catch (error) {
    errorHandler(error);
  }
}

export default postComment;
