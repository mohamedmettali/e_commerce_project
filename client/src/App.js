import './App.css';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import AddProduct from './Components/AddProduct';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Login from './Components/Login';
import ProductDescription from './Components/ProductDescription';

function App() {
  //test
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <NavBar />
     
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">MED STORE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as= {Link} to="/">Home</Nav.Link>
            <Nav.Link href="/add">Add Product</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/add' element={<AddProduct />} />
      <Route path='/login' element={<Login />} />

      <Route path="/product/:id" element={<ProductDescription />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
