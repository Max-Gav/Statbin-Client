import React from "react";
import { Container, Navbar } from "react-bootstrap";
import styles from "./NavigationBar.module.css";
import { Outlet } from "react-router-dom";
import NavigationBarSpotifyDisconnectOrConnectButton from "./Navigation Bar Components/NavigationBarSpotifyDisconnectOrConnectButton";
import NavigationBarLogoAndMenu from "./Navigation Bar Components/NavigationBarLogoAndMenu";

const NavigationBar = () => {

  return (
    <>
      <Navbar data-bs-theme="dark" className={styles.navbar_container}>
        <Container>
          <NavigationBarLogoAndMenu/>
          <NavigationBarSpotifyDisconnectOrConnectButton/>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default NavigationBar;
