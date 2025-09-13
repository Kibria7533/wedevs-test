import axios from "axios";
import errorHandler from "../helpers/errorHandler";
const BASE_URL=process.env.REACT_APP_API_URI

async function toggleFollow({ following, headers, username }) {
  try {
    const { data } = await axios({
     baseURL: BASE_URL,
      headers,
      method: following ? "DELETE" : "POST",
      url: `api/profiles/${username}/follow`,
    });

    return data.profile;
  } catch (error) {
    errorHandler(error);
  }
}

export default toggleFollow;
