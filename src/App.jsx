import {Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./Components/Navigation Bar/NavigationBar";
import Home from "./Pages/Home/Home";
import ConnectCallbackHandler from "./Pages/Connect Callback Handler/ConnectCallbackHandler";
import { createContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import refreshAccessToken from "./API Requests/Spotify Authentication and Tokens API Requests/refreshAccessToken";
import RecentlyPlayedPage from "./Pages/Recently Played/RecentlyPlayedPage";
import TopArtists from "./Pages/Top Artists/TopArtists";

//Creating a context that every child component can use
export const AccessTokenContext = createContext({});

//Time Values
const second = 1000
const minute = second * 60;
const hour = minute * 60;

function App() {
  //Access Token
  const [accessToken, setAccessToken] = useState(undefined);

  //Cookies Object
  const cookies = new Cookies();

  //Set/Refresh a value for the access token
  useEffect( () => {

    //A callback function that checks if there is any refresh token in order to create an access token
    const getAccessToken = ()=>{
      if(cookies.get("refresh-token")){
        refreshAccessToken(setAccessToken);
    }
    }
    //Create the first access token
    getAccessToken();

    //Create a new access token every hour
    setInterval(() => {
      getAccessToken();
    }, 
    /*Start the whole process a minute before the access token expires*/
    (hour - minute));

  }, []);

  return (
    <>
      <AccessTokenContext.Provider value={{accessToken, setAccessToken}} >
        <Routes>
          <Route element={<NavigationBar />}>
            <Route path="/" element={<Home/>} />
            <Route path="/recently-played" element={<RecentlyPlayedPage/>} />
            <Route path="/top-artists" element={<TopArtists/>} />
          </Route>
          <Route path="/callback" element={<ConnectCallbackHandler />} />
        </Routes>
      </AccessTokenContext.Provider>
    </>
  );
}

export default App;
