import React, { useContext } from "react";
import { Nav } from "react-bootstrap";
import styles from "../NavigationBar.module.css";
import disconnectFromSpotify from "../../../API Requests/Spotify Authentication and Tokens API Requests/disconnectFromSpotify";
import connectToSpotify from "../../../API Requests/Spotify Authentication and Tokens API Requests/connectToSpotify";
import { AccessTokenContext } from "../../../App";
import { useNavigate } from "react-router-dom";

const NavigationBarSpotifyDisconnectOrConnectButton = () => {
    const { accessToken, setAccessToken } = useContext(AccessTokenContext);
    const navigate = useNavigate();

  return (
    <div className="col-md-6">

      {/* BUTTONS */}
      {accessToken ? (

        //Disconnect Button
        <Nav className="d-md-flex justify-content-end align-items-center gap-md-3 gap-1">
          <button
            className={
              styles.disconnect_button +
              " d-flex align-items-center justify-content-between gap-2"
            }
            onClick={() => {
              disconnectFromSpotify(setAccessToken);
              navigate('/');
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
            onClick={connectToSpotify}
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
