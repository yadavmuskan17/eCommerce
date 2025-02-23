import React from "react";
import { Navbar, Nav, Image, Container } from "react-bootstrap";
import "../Css/Header.css";
import avtar from "../assets/avatar.svg";

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar-custom py-3 px-4">
      <Container fluid className="d-flex justify-content-between align-items-center">
        {/* Logo */}
        <h1 className="brand-name">@HPHONE</h1>

        {/* Profile Section */}
        <Nav className="d-flex align-items-center">
          <Image src={avtar} roundedCircle className="profile-img me-2" />
          <span className="profile-text">Profile</span>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
