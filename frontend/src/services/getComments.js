import axios from "axios";
import errorHandler from "../helpers/errorHandler";
const BASE_URL=process.env.REACT_APP_API_URI

async function getComments({ slug }) {
  try {
    const { data } = await axios({ baseURL: BASE_URL,  url: `api/articles/${slug}/comments` });

    return data.comments;
  } catch (error) {
    errorHandler(error);
  }
}

export default getComments;
