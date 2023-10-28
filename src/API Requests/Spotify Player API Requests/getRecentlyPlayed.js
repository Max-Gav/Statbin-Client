import axios from "axios";

const getRecentlyPlayed = async (accessToken, setData) => {
    if(accessToken){
        const response = await axios({
            method: "get",
            url: "https://api.spotify.com/v1/me/player/recently-played?limit=50",
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

export default getRecentlyPlayed;
