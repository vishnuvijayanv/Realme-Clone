import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
function AdBanner() {
  return (
    <div>
        <div style={{backgroundSize:'cover'}} >
            <img width={'100%'} height={'90px'} src="https://image01.realme.net/general/20231113/16998442354072a055c242ae940d7b9e32e281cd6b519.jpg" alt="" />
        </div>
        <Navbar className='mt-2' style={{height:'10px',fontSize:'11px'}} bg="light" data-bs-theme="light">
        <Container >
          <Nav  style={{marginRight:'500px'}}>
            <Nav.Link href="#home">Brand</Nav.Link>
            <Nav.Link href="#home">|</Nav.Link>
            <Nav.Link href="#features">App</Nav.Link>
            <Nav.Link href="#home">|</Nav.Link>

            <Nav.Link href="#pricing">Community</Nav.Link>
            <Nav.Link href="#home">|</Nav.Link>

            <Nav.Link href="#features">Support</Nav.Link>
            <Nav.Link href="#home">|</Nav.Link>

            <Nav.Link href="#features">realme VIP</Nav.Link>
            <Nav.Link href="#home">|</Nav.Link>

            <Nav.Link href="#features">5G</Nav.Link>
          </Nav>
          <Nav  >
            <Nav.Link href="#home">Login</Nav.Link>
            <Nav.Link href="#home">|</Nav.Link>

            <Nav.Link href="#features">My Order</Nav.Link>
            <Nav.Link href="#home">|</Nav.Link>

            <Nav.Link href="#pricing">Cart</Nav.Link>
            
          </Nav>

        </Container>
      </Navbar>
    </div>
  )
}

export default AdBanner