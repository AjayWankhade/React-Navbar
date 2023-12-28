import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from '../src/components/Home';
import Contact from '../src/components/Contact';
import About from '../src/components/About';

function App() {
  return( 
    <BrowserRouter>
  <div>
   
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact" >Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    
      <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>

      </Routes>
      </div>
      
 

  </div>
  </BrowserRouter>
  )
}

export default App;
