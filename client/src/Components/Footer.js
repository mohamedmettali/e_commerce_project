import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <Container>
        <Row>
          <Col>
            <p>&copy; 2024 MED STORE. All rights reserved.</p>
          </Col>
          <Col className="text-end">
            <p>Contact: contact@medstore.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;