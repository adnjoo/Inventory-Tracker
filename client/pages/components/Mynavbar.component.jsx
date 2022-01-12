import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

export default function MyNavBar() {
  return (
    <div className="mx-5">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/truck.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Truck logo"
            />
            &nbsp;&nbsp;Inventory Tracker
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              created by:
              {' '}
              <a href="https://github.com/adnjoo/backend-challenge" target="_blank" rel="noreferrer">adnjoo</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
