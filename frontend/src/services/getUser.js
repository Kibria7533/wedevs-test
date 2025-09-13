import axios from "axios";
import errorHandler from "../helpers/errorHandler";
const BASE_URL=process.env.REACT_APP_API_URI

async function getUser({ headers }) {
  try {
    const { data } = await axios({  baseURL: BASE_URL, headers, url: "api/user" });

    return data.user;
  } catch (error) {
    errorHandler(error);
  }
}

export default getUser;
