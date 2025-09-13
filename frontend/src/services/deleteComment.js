import axios from "axios";
import errorHandler from "../helpers/errorHandler";
const BASE_URL=process.env.REACT_APP_API_URI

async function deleteComment({ commentId, headers, slug }) {
  try {
    const { data } = await axios({
     baseURL: BASE_URL,
      headers,
      method: "DELETE",
      url: `api/articles/${slug}/comments/${commentId}`,
    });

    return data;
  } catch (error) {
    errorHandler(error);
  }
}

export default deleteComment;
