import axios from "axios";

const getArtistTopTracks = async (accessToken, setData, url) => {

  
    if(accessToken){
        const response = await axios({
            method: "get",
            url: url + "/top-tracks?market=US",
            headers: {
              Authorization: "Bearer " + accessToken,
            },
          })
          setData(response.data.tracks)
        
    }
    else{
        console.log("No Access Token");
    }

}

export default getArtistTopTracks;
