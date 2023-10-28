import React, { useContext, useEffect, useState } from "react";
import getRecentlyPlayed from "../../API Requests/Spotify Player API Requests/getRecentlyPlayed";
import { AccessTokenContext } from "../../App";
import RecentlyPlayedPageTitle from "./Recently Played Page Elements/RecentlyPlayedPageTitle";
import RecentlyPlayedPageItemsLoader from "./Recently Played Page Elements/RecentlyPlayedPageItemsLoader";

const RecentlyPlayedPage = () => {
  const [data, setData] = useState(null);
  const [tracks, setTracks] = useState([]);
  const { accessToken } = useContext(AccessTokenContext);

  useEffect(() => {
    getRecentlyPlayed(accessToken, setData);
  }, [accessToken]);

  useEffect(() => {
    if (data) {
      setTracks([...tracks,...data.items]);
      
    }
  }, [data]);

  return (
    <div className="container d-flex flex-column gap-3 my-3">
      <RecentlyPlayedPageTitle/>
      <RecentlyPlayedPageItemsLoader tracks={tracks}/>

    </div>
  );
};

export default RecentlyPlayedPage;
