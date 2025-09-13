import axios from "axios";
import errorHandler from "../helpers/errorHandler";
const BASE_URL=process.env.REACT_APP_API_URI

async function getTags() {
  try {
    const { data } = await axios({ baseURL: BASE_URL, url: "/api/tags" });

    return data.tags;
  } catch (error) {
    errorHandler(error);
  }
}

export default getTags;
