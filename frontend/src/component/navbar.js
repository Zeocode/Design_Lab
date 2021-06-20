import React from 'react';
import { Button,Navbar,Nav,Form,FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../component/img/logo.svg'


<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>

function Navmenu(){
    return <div> <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">
      <img
        alt=""
		    src={logo}
		    width="30"
        height="30"
        className="img-responsive"
      />Sourav Dutta</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#info">Info</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <br />
  

  </div>
}

export default Navmenu