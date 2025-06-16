import React, { useContext } from "react";
import { Nav } from "react-bootstrap";
import styles from "../NavigationBar.module.css";
import disconnectFromSpotify from "../../../API Requests/Spotify Connect Requests/disconnectFromSpotify";
import connectToSpotify from "../../../API Requests/Spotify Connect Requests/connectToSpotify";
import { IsLoggedInContext } from "../../../AppContext";

const NavigationBarSpotifyDisconnectOrConnectButton = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(IsLoggedInContext);

  return (
    <div className="col-md-6">
      {/* BUTTONS */}
      {isLoggedIn ? (
        //Disconnect Button
        <Nav className="d-md-flex justify-content-end align-items-center gap-md-3 gap-1">
          <button
            className={
              styles.disconnect_button +
              " d-flex align-items-center justify-content-between gap-2"
            }
            onClick={() => {
              disconnectFromSpotify(setIsLoggedIn);
            }}
          >
            <span>Disconnect</span>
            <i className="fa-brands fa-spotify"></i>
          </button>
        </Nav>
      ) : (
        //Connect Button
        <Nav className="d-md-flex justify-content-end align-items-center gap-md-3 gap-1">
          <button
            className={
              styles.connect_button +
              " d-flex align-items-center justify-content-between gap-2"
            }
            onClick={() => {
              connectToSpotify();
            }}
          >
            <span>Connect</span>
            <i className="fa-brands fa-spotify"></i>
          </button>
        </Nav>
      )}

    </div>
  );
};

export default NavigationBarSpotifyDisconnectOrConnectButton;
