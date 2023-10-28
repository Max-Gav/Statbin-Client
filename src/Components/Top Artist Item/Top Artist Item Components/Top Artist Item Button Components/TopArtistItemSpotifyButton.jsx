import React from "react";
import styles from "./TopArtistItemButtons.module.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const TopArtistItemSpotifyButton = ({ spotify_url }) => {
  const btnSize = "50px";

  //Button Tooltip
  const tooltip = (
    <Tooltip>
      <strong>Artist Spotify Page</strong>
    </Tooltip>
  );
  return (
    <OverlayTrigger placement="bottom" overlay={tooltip}>
      <button
        className={"rounded-circle fs-4 " + styles.spotify_button}
        style={{ width: btnSize, height: btnSize }}
        onClick={() => {
          window.open(spotify_url);
        }}
      >
        <i className="fa-brands fa-spotify"></i>
      </button>
    </OverlayTrigger>
  );
};

export default TopArtistItemSpotifyButton;
