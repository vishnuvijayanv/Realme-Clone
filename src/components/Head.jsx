import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Head() {
  return (
    <div>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
     
      
    </div>
  )
}

export default Head
