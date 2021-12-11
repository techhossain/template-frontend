import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const NavBar = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link className="navbar-brand" to="/">KitchenWare</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/home">Home</Link>
            <Link className="nav-link" to="/products">Products</Link>
            {!user.email &&
              <Link className="nav-link" to="/login">Login</Link>
            }
            {!user.email &&
              <Link className="nav-link" to="/register">Register</Link>
            }
            {user.email &&
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            }
            {user.email &&
              <button className="nav-link btn" onClick={logOut}>LogOut</button>
            }
            <Link className="nav-link" to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;