import axios from "axios";
import errorHandler from "../helpers/errorHandler";
const BASE_URL=process.env.REACT_APP_API_URI

async function getProfile({ headers, username }) {
  try {
    const { data } = await axios({  baseURL: BASE_URL, headers, url: `api/profiles/${username}` });

    return data.profile;
  } catch (error) {
    errorHandler(error);
  }
}

export default getProfile;
