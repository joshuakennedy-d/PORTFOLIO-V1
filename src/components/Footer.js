import React from "react";
import Button from "react-bootstrap/Button";

import { CgGitFork} from "react-icons/cg";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
        <h3>Designed and Developed by Joshua Kennedy D</h3>
          
          </Col>
        
        <Col md="4" className="footer-copywright">
        <li className="social-icons">
        <h3>Copyright © {year} JK</h3>
          
          </li>
        <li className="social-icons">
        <Col md="4" className="footer-copywright">
          <Button
                href="https://github.com/joshuakennedy-d/PORTFOLIO-V1"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
              </Button>
        </Col>
          </li>

        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/joshuakennedy-d"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/joshua-kennedy-a55287269/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/joshuakennedy.d"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
        
      </Row>
    </Container>
  );
}

export default Footer;
