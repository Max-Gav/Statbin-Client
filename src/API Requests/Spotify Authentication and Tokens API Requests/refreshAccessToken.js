//Cookies and Axios imports
import axios from "axios";
import Cookies from "universal-cookie"


//A function that calls our server tp get an access token and then saves it
const refreshAccessToken = async (setAccessToken)=>{
    //Using cookies
    const cookies = new Cookies();

    //Getting the refresh token
    const refresh_token = cookies.get("refresh-token");

    //API request to our own server in order to get a new access token
     axios({
        method: 'get',
        url: `http://localhost:3001/auth/refresh-access-token?refresh_token=${refresh_token}`,

      }).then((response)=>{
        return response.data;
      }).then(({data})=>{
        //Setting the value of the access token in the site cookies and in the global context
        setAccessToken(data.access_token);
        cookies.set('access-token', data.access_token, {maxAge:data.expires_in});
      });

}


export default refreshAccessToken;