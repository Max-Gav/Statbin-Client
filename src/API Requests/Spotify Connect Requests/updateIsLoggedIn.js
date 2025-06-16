//Axios import
import axios from "axios";

//Server Domain import
import { SERVER_CONNECTION } from "../Variables";

//An API request from Statbin server that gets a Spotify authorization page link and redirects to it
const updateIsLoggedIn = async (setIsLoggedIn) => {
  await axios({
    method: "get",
    url: `${SERVER_CONNECTION}/auth/is-logged-in`,
    withCredentials: true,
  })
  .then((response) => response.data)
  .then((data) => {
      setIsLoggedIn(data.answer);
  })
  .catch((error) => {
      console.error("Error initiating Spotify authorization:", error);
  });
};

export default updateIsLoggedIn;
