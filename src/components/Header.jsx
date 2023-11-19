import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <div>
        <div className='container' style={{color:'black'}}>
        <Navbar className='mt-3' style={{height:'50px'}} bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home" style={{marginRight:'200px'}}><img width={'100px'}  src='https://brandlogos.net/wp-content/uploads/2021/05/realme-logo.png'></img></Navbar.Brand>
          <Nav className="me-auto" style={{color:'#0000' ,fontSize:'13px'}}>
            <Nav.Link style={{color:'black'}} href="#home">₹50L Giveaway</Nav.Link>
            <Nav.Link style={{color:'black'}} href="#features">realme Phones</Nav.Link>
            <Nav.Link style={{color:'black'}} href="#pricing">narzo Phones</Nav.Link>
            <Nav.Link style={{color:'black'}} href="#features">Audio</Nav.Link>
            <Nav.Link style={{color:'black'}} href="#features">Tablet & Wearable</Nav.Link>
            <Nav.Link style={{color:'black',marginRight:'100px'}} href="#features" >Accessories</Nav.Link>



            <button style={{border:'0px white'}}><i class="fa-solid fa-magnifying-glass  mt-3"></i></button>


          </Nav>
        </Container>
      </Navbar>
      </div>
    </div>
  )
}

export default Header