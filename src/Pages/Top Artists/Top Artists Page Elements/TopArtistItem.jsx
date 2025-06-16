import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import styles from "./TopArtistItem.module.css";
import fetchDataFromSpotify from "../../../API Requests/Spotify API Requests/fetchDataFromSpotify";
import TopItemButtons from "../../../Components/Top Items Page Components/TopItemButtons";

const TopArtistItem = ({ item: artist, itemIndex }) => {
  const [tracks, setTracks] = useState([]);
  const [trackIndex, setTrackIndex] = useState(0);
  const allowFetch = true;

  //Method to get the artist top tracks
  const fetchData = async () => {
    try {
      const result = await fetchDataFromSpotify(
        artist.href + "/top-tracks?market=US"
      );
      setTracks(result.tracks);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //Get the artist top tracks
  useEffect(() => {
    (artist && allowFetch) && fetchData();
  }, [artist]);

  // Get the index of the first track with a preview link
  useEffect(() => {
    getPreviewUrl(artist, tracks, setTrackIndex);
  }, [tracks]);

  return (
    <div className="col-xl-2 col-lg-4 col-md-6 my-2">
      <Card
        className="text-white p-0 text-center"
        style={{ position: "relative", border: "none" }}
        bg="transparent"
      >
        <div className={styles.artist_image_container}>
          <TopItemButtons
            preview_url={tracks.length > 0? tracks[trackIndex].preview_url:null}
            item_spotify_url={artist.external_urls.spotify}
          />

          <Card.Img
            src={artist.images[0].url}
            style={{
              position: "absolute",
            }}
          />
          <Card.Img
            src={artist.images[0].url}
            style={{
              position: "absolute",
            }}
            className={styles.back}

          />
        </div>
        <Card.Body>
          <Card.Title
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {itemIndex}. {artist.name}
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TopArtistItem;

//Method to get the index of the first track with a preview link
function getPreviewUrl(artist, tracks, setTrackIndex) {
  let trackIndex = 0;

  for (let index = 0; index < tracks.length; index++) {
    if (tracks[index].preview_url) {
      if (tracks[index].artists[0].name === artist.name) {
        setTrackIndex(index);
        return;
      } else if (trackIndex == 0) {
        trackIndex = index;
      }
    }
  }
  setTrackIndex(trackIndex);
}
