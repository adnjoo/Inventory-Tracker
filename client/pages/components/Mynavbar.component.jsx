import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

export default function MyNavBar() {
  return (
    <div>
      <Navbar bg="light" variant="light" className="mx-3">
        <Container>
          <Navbar.Brand href="#home">Inventory Tracker</Navbar.Brand>
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
