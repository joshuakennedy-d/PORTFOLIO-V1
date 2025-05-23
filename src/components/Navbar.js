import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgSoftwareDownload } from "react-icons/cg";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [showLogo, setShowLogo] = useState(false); // State to toggle logo visibility

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
      setShowLogo(true); // Show logo when scrolled
    } else {
      updateNavbar(false);
      setShowLogo(false); // Hide logo when at the top
    }
  }

  useEffect(() => {
    let timeout;

    const resetTimer = () => {
      setIsHidden(false); // Show the navbar on interaction
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsHidden(true), 3000); // Hide after 3 seconds of inactivity
    };

    // Add event listeners for user interaction
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("touchstart", resetTimer);

    // Start the timer
    resetTimer();

    return () => {
      // Cleanup event listeners
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("touchstart", resetTimer);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={`${navColour ? "sticky" : "navbar"} ${
        isHidden ? "hidden" : ""
      }`}
    >
      <Container
        className={`navbar-container ${showLogo ? "align-left" : "align-center"}`}
      >
        <Navbar.Brand
          href="/"
          className={`d-flex ${showLogo ? "show-logo" : "hide-logo"}`}
        >
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="fork-btn">
              <Button
                href="/Resume_Joshua_Kennedy.pdf"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgSoftwareDownload style={{ fontSize: "1.2em" }} /> {" RESUME"}
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
