import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import styles from "./TopArtistItemButtons.module.css";

const TopArtistItemProfileButton = () => {
  const btnSize = "50px";

  //Button Tooltip
  const tooltip = (
    <Tooltip>
      <strong>Artist Profile</strong>
    </Tooltip>
  );
  return (
    <OverlayTrigger placement="bottom" overlay={tooltip}>
      <button
        className={"rounded-circle fs-4 " + styles.profile_button }
        style={{ width: btnSize, height: btnSize }}
      >
        <i class="fa-solid fa-user"></i>
      </button>
    </OverlayTrigger>
  );
};

export default TopArtistItemProfileButton;
