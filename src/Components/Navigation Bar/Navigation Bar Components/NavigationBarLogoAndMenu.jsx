import React, { useContext } from "react";
import {  NavDropdown, Navbar } from "react-bootstrap";
import logo from "../../../assets/images/logo.png";
import styles from "../NavigationBar.module.css";
import { IsLoggedInContext } from "../../../AppContext";



const NavigationBarLogoAndMenu = () => {
  const { isLoggedIn } = useContext(IsLoggedInContext);

  return (
    <div className="col-md-6 d-flex align-items-center gap-2">

        {/* LOGO */}
      <Navbar.Brand href="/" className="d-flex gap-3">
        <img src={logo} alt="" className={styles.small_logo} />
        <span className="fs-5 fw-bold">STATBIN</span>
      </Navbar.Brand>

      {/* MENU */}
      {isLoggedIn && (
        <NavDropdown title={<i className="fa-solid fa-bars text-white"></i>}>
          <NavDropdown.Item href="/recently-played">
            Recently Played
          </NavDropdown.Item>
          <NavDropdown.Item href="/top-artists">
            Top Artists
          </NavDropdown.Item>
          <NavDropdown.Item href="/top-tracks">
            Top Tracks
          </NavDropdown.Item>
        </NavDropdown>
      )}

      
    </div>
  );
};

export default NavigationBarLogoAndMenu;
