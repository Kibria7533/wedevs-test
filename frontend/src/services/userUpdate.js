import axios from "axios";
import errorHandler from "../helpers/errorHandler";
const BASE_URL=process.env.REACT_APP_API_URI

async function userUpdate({ headers, bio, email, image, password, username }) {
  try {
    const { data } = await axios({
     baseURL: BASE_URL,
      data: { user: { bio, email, image, password, username } },
      headers,
      method: "PUT",
      url: "api/user",
    });

    const { user } = data;

    const loggedIn = { headers, isAuth: true, loggedUser: user };

    localStorage.setItem("loggedUser", JSON.stringify(loggedIn));

    return loggedIn;
  } catch (error) {
    errorHandler(error);
  }
}

export default userUpdate;
