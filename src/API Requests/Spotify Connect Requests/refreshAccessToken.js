//Cookies and Axios imports
import axios from "axios";
import { SERVER_CONNECTION } from "../Variables";

//Function that calls our server to refresh/get an access token for the user
const refreshAccessToken = async () => {
  try {
    const response = await axios({
      method: "post",
      url: `${SERVER_CONNECTION}/auth/refresh-access-token`,
      withCredentials: true,
      headers:{
        'client-type': 'web'
      }
    });

    return response.data.expires_in;
  } catch (error) {
    console.log(error);
    console.error("Error refreshing user's access token using Spotify:", error);
    throw error;
  }
};

export default refreshAccessToken;
