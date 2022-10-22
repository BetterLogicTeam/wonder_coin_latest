import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css"
import logo from "../Assets/logo.png"
import { Link } from "react-router-dom"

function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className='nav_main'>
        <Container>
          <Navbar.Brand href="#home"> <Link to='/'> <img src={logo} className='nav_logo' alt="" /></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="Nav_link_class">
              <Nav.Link >
                <Link to='about' className='nav_linkk'>About us</Link>
              </Nav.Link>

              <NavDropdown title={<span className="text-white my-auto">Presale</span>} id="collasible-nav-dropdown" className='text-white' style={{ color: "#fff" }}>
                <NavDropdown.Item >
                  <Link to="cycle1" className='Link_text'>

                    Cycle 1
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <Link to="cycle2" className='Link_text'>

                  Cycle 2
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <Link to="cycle3" className='Link_text'>

                  Cycle 3

                  </Link>
                </NavDropdown.Item>

              </NavDropdown>
              <NavDropdown title={<span className="text-white my-auto">Buy Coin</span>} id="collasible-nav-dropdown" className='text-white' style={{ color: "#fff" }}>
                <NavDropdown.Item >
                  <Link to="/CheckRegister" className='Link_text'>

                    Buy Coin
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <Link to="/Buy_Coin_History" className='Link_text'>

                    Buy Coin History
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <Link to="/Refferral_history" className='Link_text'>

                    Referral

                  </Link>
                </NavDropdown.Item>

              </NavDropdown>
              <Nav.Link>
                <Link to='nft' className='nav_linkk'>NFT</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='nftop' className='nav_linkk'>NFT open Market</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='lpfar' className='nav_linkk'>L.P Farming</Link>
              </Nav.Link>
              {/* <Nav.Link>
                <Link className='nav_linkk'>Game  </Link>
            </Nav.Link> */}
              <Nav.Link>
                <Link to='sawp' className='nav_linkk'>Swap Exchange  </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='wonder' className='nav_linkk'>Wonder Land  </Link>
              </Nav.Link>


            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
