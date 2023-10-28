import axios from "axios";

export const getUserTopTracks = async (accessToken, setData) => {
    if(accessToken){
        const response = await axios({
            method: "get",
            url: "https://api.spotify.com/v1/me/top/tracks",
            headers: {
              Authorization: "Bearer " + accessToken,
            },
          })
        
          setData(response.data);
    }
    else{
        console.log("No Access Token");
    }

}

export const getUserTopArtists = async (accessToken, setData, options = {}) => {

    let page = options.page * 48 || 0;
    let limit = options.limit || 40;
    let time_range = "medium_term";

    switch(options.time_range){
      case "short":
        time_range = "short_term";
        break;
      case "medium":
        time_range = "medium_term";
        break;
      case "long":
        time_range = "long_term";
        break;
      default:
        time_range = "medium_term";
        break;
        
    }

    if(accessToken){
        const response = await axios({
            method: "get",
            url: `https://api.spotify.com/v1/me/top/artists?limit=${limit}&time_range=${time_range}&offset=${page}`,
            headers: {
              Authorization: "Bearer " + accessToken,
            },
          })
        
        setData(response.data);
    }
    else{
        console.log("No Access Token");
    }

}


