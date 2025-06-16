import { useContext, useEffect, useState } from "react";
import fetchDataFromSpotify from "../API Requests/Spotify API Requests/fetchDataFromSpotify";
import { IsLoggedInContext } from "../AppContext";

const useRecentlyPlayed = () => {
  const [data, setData] = useState(null);
  const [items, setItems] = useState([]);
  const { isLoggedIn } = useContext(IsLoggedInContext);

  const fetchData = async () => {
    try {
      const result = await fetchDataFromSpotify(
        "https://api.spotify.com/v1/me/player/recently-played?limit=50"
      );
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    isLoggedIn && fetchData();
  }, [isLoggedIn]);

  useEffect(() => {
    if (data) {
        setItems([...items, ...data.items]);
    }
  }, [data]);
  
  return {items}
};

export default useRecentlyPlayed;
