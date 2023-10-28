import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import styles from "./TopArtistItem.module.css";
import getArtistTopTracks from "../../API Requests/Spotify Artist API Requests/getArtistTopTracks";
import { AccessTokenContext } from "../../App";
import TopArtistItemButtons from "./Top Artist Item Components/TopArtistItemButtons";


//Method to get the index of the first track with a preview link
function getPreviewUrl(artist, tracks, setTrackIndex) {
  let trackIndex = 0;

  for (let index = 0; index < tracks.length; index++) {
    if (tracks[index].preview_url) {
      if (tracks[index].artists[0].name === artist.name) {
        setTrackIndex(index);
        return;
      }
      else if(trackIndex == 0){
        trackIndex = index;
      }
    } 
    
  }
  setTrackIndex(trackIndex);
}


const TopArtistItem = ({ artist, itemIndex }) => {
  const [tracks, setTracks] = useState([]);
  const { accessToken } = useContext(AccessTokenContext);
  const [trackIndex, setTrackIndex] = useState(0);

  //Get the artist top tracks
  useEffect(() => {
    getArtistTopTracks(accessToken, setTracks, artist.href);
  }, []);

  //Get the index of the first track with a preview link
  useEffect(() => {
    getPreviewUrl(artist, tracks, setTrackIndex);
  }, [tracks]);

  return (
    <div className="col-xl-2 col-lg-4 col-md-6 my-2">
      <Card
        className="text-white p-0 text-center"
        style={{ position: "relative" }}
        bg="transparent"
      >
        <div className={styles.artist_image}>
          {tracks.length > 0 && (
            <TopArtistItemButtons
              trackData={tracks[trackIndex]}
              artistUrl={artist.external_urls.spotify}
            />
          )}

          <Card.Img
            src={artist.images[0].url}
            className={`w-100 ${styles.artist_image}`}
            style={{
              aspectRatio: "1",
              background: "gray",
              borderRadius: "50%",
              position: "absolute",
            }}
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
            {itemIndex + 1}. {artist.name}
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TopArtistItem;

