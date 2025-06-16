//Axios import
import axios from "axios";

//Server Domain import
import { SERVER_CONNECTION } from "../Variables";


    //A function that deletes the refresh and access token from cookies
    const disconnectFromSpotify = async (setIsLoggedIn)=>{
        try {
            await axios({
                method: 'post',
                url: `${SERVER_CONNECTION}/auth/disconnect-from-spotify`,
                withCredentials:true
              })
            
            setIsLoggedIn(false);
            window.location.reload(false);

          } catch (error) {
            console.error('Error disconnecting from Spotify:', error);
          }

    }


    export default disconnectFromSpotify;