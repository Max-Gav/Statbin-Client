import axios from "axios";
import { SERVER_CONNECTION } from "../Variables";

const fetchDataFromSpotify = async (url) => {
  try {
    const encodedUrl = encodeURIComponent(url);
    const response = await axios({
      method: "get",
      url: `${SERVER_CONNECTION}/spotify-api/fetch?url=${encodedUrl}`,
      withCredentials: true,
    });

    return response.data; 
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export default fetchDataFromSpotify;
