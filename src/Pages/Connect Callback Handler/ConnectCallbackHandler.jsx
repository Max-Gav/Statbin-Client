import React, { useEffect } from 'react'
import Cookies from 'universal-cookie';


const ConnectCallbackHandler = () => {
  //Time Variables in Seconds
  const minute = 60;
  const hour = 60 * minute;
  const day = hour * 24;

  //Query Params
  const params = new URLSearchParams(window.location.search);
  const access_token = params.get("access_token");
  const refresh_token = params.get("refresh_token");
  const expiresIn = params.get("expires_in");
  let redirectToIndex = false;

  //Cookies Object
  const cookies = new Cookies();

  console.log(access_token);

  //A useEffect to return to the index page
  useEffect(() => {
      if(redirectToIndex)
      {
        window.location.href = '/';
      }
  }, [redirectToIndex]);
  
  
  //Handling Access Tokens
  if (!access_token) {
    redirectToIndex = true;
  }
  else{
    //Access Token Cookie
    cookies.set('access-token', access_token, {maxAge:expiresIn});

    //Refresh Token Cookie
    if(refresh_token){
      cookies.set('refresh-token', refresh_token, {maxAge:day*60});
    }

    redirectToIndex = true;
  }


  return (
    <div></div>
  )
}

export default ConnectCallbackHandler


//This Page is Entirely Dedicated to Handling 
