import React from "react";
import styles from "./ConnectButton.module.css";
import connectToSpotify from "../../../API Requests/Spotify Connect Requests/connectToSpotify";

const ConnectButton = () => {
  return (
    <div className="d-flex justify-content-center">
      <button
        className={
          styles.connect_button +
          " d-flex align-items-center justify-content-between gap-2 fs-4 "
        }
        onClick={() => {
          connectToSpotify();
        }}
      >
        <span>Connect</span>
        <i className="fa-brands fa-spotify"></i>
      </button>
    </div>
  );
};

export default ConnectButton;
