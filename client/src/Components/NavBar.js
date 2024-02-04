import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Nav, Navbar, Container, Button, Image } from "react-bootstrap";
import { get_auth_user, logout } from "../Redux/actions";
import { useNavigate } from "react-router";
import Login from "./Login";
import Register from "./Register";
import logo from "./logo.png"

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(get_auth_user());
  }, []);

  const user = useSelector((state) => state.user);

  const logout_user = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"> <Image src={logo} alt="Your Logo" className="logo"  style={{ width: '140px', height: 'auto' }}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          navigate("/");
          </Nav>
          <Nav>
            {user ? (
              <>
                <Nav.Link href="#home">{user.fullName}</Nav.Link>
                <Button variant="outline-danger" onClick={logout_user}>
                  Log out
                </Button>
              </>
            ) : (
              <>
                <Nav.Link href="#home">
                  <Login />
                </Nav.Link>
                <Nav.Link href="#home">
                  <Register />
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;