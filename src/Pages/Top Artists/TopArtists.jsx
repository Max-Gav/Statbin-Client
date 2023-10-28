import React, { useContext, useEffect, useState } from "react";
import { getUserTopArtists } from "../../API Requests/Spotify User API Requests/getUserTopItems";
import { AccessTokenContext } from "../../App";
import TopArtistsPageTimeFilterButtons from "./Top Artists Page Elements/topArtistsPageTimeFilterButtons";
import TopArtistsPageLoadMoreButton from "./Top Artists Page Elements/TopArtistsPageLoadMoreButton";
import TopArtistsPageItemsLoader from "./Top Artists Page Elements/TopArtistsPageItemsLoader";
import TopArtistsPageTitle from "./Top Artists Page Elements/TopArtistsPageTitle";

const TopArtists = () => {
  const [data, setData] = useState(null);
  const [artists, setArtists] = useState([]);
  const [page, setPage] = useState(0);
  const [timeRange, setTimeRange] = useState("medium");
  const [triggerApiFetch, setTriggerApiFetch] = useState(false);
  const { accessToken } = useContext(AccessTokenContext);
  const options = { limit: 48, page: page, time_range: timeRange };

  //Getting the top user top artists
  useEffect(() => {
    getUserTopArtists(accessToken, setData, options);
  }, [accessToken, page, triggerApiFetch]);

  //Setting the artists variable with the data
  useEffect(() => {
    if (data) {
      setArtists([...artists, ...data.items]);
    }
  }, [data]);

  //Resetting the artists array and page every time the user changes the time range
  useEffect(() => {
    setArtists([]);
    setPage(0);
    setTriggerApiFetch((lastValue) => {
      return !lastValue;
    });
  }, [timeRange]);

  return (
    <div className="container d-flex flex-column gap-3 my-3 text-white">
      <TopArtistsPageTitle />

      <TopArtistsPageTimeFilterButtons
        timeRange={timeRange}
        setTimeRange={setTimeRange}
      />

      <TopArtistsPageItemsLoader artists={artists} />

      <TopArtistsPageLoadMoreButton page={page} setPage={setPage} />
    </div>
  );
};

export default TopArtists;
