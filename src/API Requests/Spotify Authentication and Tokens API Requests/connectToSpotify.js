//Axios import
import axios from "axios";

//An API request from Statbin server that gets a Spotify authorization page link and redirects to it
const connectToSpotify = async () => {
  await axios
    .get("http://localhost:3001/auth/login")
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
