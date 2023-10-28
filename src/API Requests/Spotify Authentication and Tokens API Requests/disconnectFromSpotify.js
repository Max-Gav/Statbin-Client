//Cookies import
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie"


//A function that deletes the refresh and access token from cookies
const disconnectFromSpotify = (setAccessToken)=>{
    //Using cookies
    const cookies = new Cookies();

    cookies.remove('access-token', { path: '/' });
    cookies.remove('refresh-token', { path: '/' });
    setAccessToken(undefined);

}


export default disconnectFromSpotify;