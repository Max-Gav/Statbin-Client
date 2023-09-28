import React from "react";
import { Container, Nav, Navbar, NavDropdown, Row, Col } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  console.log(styles);
  return (
    <Navbar
      data-bs-theme="dark"
      className={styles.navbar_container}
    >
      <Container >
        <div className="col-md-6 ">
          <Navbar.Brand href="/" className="d-flex gap-3">
            <img src={logo} alt="" className={styles.small_logo} />
            <span className="fs-5 fw-bold">STATBIN</span>
          </Navbar.Brand>
        </div>
        <div className="col-md-6">
          <Nav className="d-md-flex d-none justify-content-end gap-md-3 gap-1">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/signup">Sign up</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>

          <NavDropdown title="More" className="d-md-none d-flex text-white fw-bold ms-3" align={{md:"start"}}>
            <NavDropdown.Item href="/">Home</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/signup">Sign up</NavDropdown.Item>
            <NavDropdown.Item href="/login">
              Login
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
