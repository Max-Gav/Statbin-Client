import { useEffect, useState } from "react";
import updateIsLoggedIn from "../API Requests/Spotify Connect Requests/updateIsLoggedIn";
import refreshAccessToken from "../API Requests/Spotify Connect Requests/refreshAccessToken";

// Time Values
const second = 1000;
const minute = second * 60;
const hour = minute * 60;

const useIsLoggedIn = () => {
  // A state that indicates if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Effect to check if the user is logged in when the component mounts
  useEffect(() => {
    setIsLoggedIn && updateIsLoggedIn(setIsLoggedIn);
  }, [setIsLoggedIn]);

  // Function that refreshes/gets an access token and sets a timeout in order to refresh the access token when it expires
  const getAccessToken = async () => {
    if (isLoggedIn) {
      const expiresIn = await refreshAccessToken();

      let nextRefreshInMiliSeconds = expiresIn - Date.now() - minute;
      nextRefreshInMiliSeconds =
        nextRefreshInMiliSeconds > 0 ? nextRefreshInMiliSeconds : 0;
      setTimeout(getAccessToken, nextRefreshInMiliSeconds);
    } else {
      console.log("User not logged in");
    }
  };

  // Get/Refresh an access token
  useEffect(() => {
    getAccessToken();
  }, [isLoggedIn]);

  return { isLoggedIn, setIsLoggedIn };
};

export default useIsLoggedIn;
