import { useState, useEffect, useContext} from "react";
import { IsLoggedInContext } from "../AppContext";
import fetchDataFromSpotify from "../API Requests/Spotify API Requests/fetchDataFromSpotify";

const useTopItems = (itemType) => {
  const [data, setData] = useState(null);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [timeRange, setTimeRange] = useState("medium");
  const { isLoggedIn } = useContext(IsLoggedInContext);


  //Function to fetch top tracks from Spotify API
  const fetchData = async () => {
    try {
      const result = await fetchDataFromSpotify(
        `https://api.spotify.com/v1/me/top/${itemType}?limit=48&time_range=${timeRange}_term&offset=${
          page * 48
        }`
      );
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //Getting the top user top tracks
  useEffect(() => {
    isLoggedIn && fetchData();
  }, [isLoggedIn, page, timeRange]);

  //Setting the tracks variable with the data
  useEffect(() => {
    if (data) {
      setItems([...items, ...data.items]);
    }
  }, [data]);

  //Resetting the tracks array and page every time the user changes the time range
  useEffect(() => {
    setItems([]);
    setPage(0);
  }, [timeRange]);


  return {items, page, setPage, timeRange, setTimeRange}
};


export default useTopItems;
