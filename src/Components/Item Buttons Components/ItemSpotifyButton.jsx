import React from "react";
import styles from "./ItemButtons.module.css"
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const btnSize = "50px";

const ItemSpotifyButton = ({ spotify_url }) => {
  //Button Tooltip
  const tooltip = (
    <Tooltip>
      <strong>Spotify Page</strong>
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

export default ItemSpotifyButton;
