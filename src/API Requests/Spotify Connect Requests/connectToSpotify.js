//Axios import
import axios from "axios";

//Server Domain import
import { SERVER_CONNECTION } from "../Variables";

//An API request from Statbin server that gets a Spotify authorization page link and redirects to it
const connectToSpotify = async () => {
  await axios({
    method: "get",
    url: `${SERVER_CONNECTION}/auth/login`,
  })
    .then((response) => response.data)
    .then((data) => {
      // Redirect the user to the Spotify authorization page
      const authorizeUrl = data.authorizeUrl;
      window.location.href = authorizeUrl;
    })
    .catch((error) => {
      console.error("Error initiating Spotify authorization:", error);
    });
  await axios
    .get(`${SERVER_CONNECTION}/auth/login`)
    .then((response) => response.data)
    .then((data) => {
      // Redirect the user to the Spotify authorization page
      const authorizeUrl = data.authorizeUrl;
      window.location.href = authorizeUrl;
    })
    .catch((error) => {
      console.error("Error initiating Spotify authorization:", error);
    });
};

export default connectToSpotify;
