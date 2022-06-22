import React, { useState } from 'react';
import { Card,Container,Button } from 'react-bootstrap';
import ReactDOM from 'react-dom/client';
import InputGroup from 'react-bootstrap/InputGroup';
import { Form } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { NavLink, Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Home';
import Projectmembers from './Projectmembers';
import Publication from './Publication';
import Project from './Project';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext"
function Dashboard(){
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useNavigate()
    async function handleLogout() {
        setError("")
    
        try {
          await logout()
          history("/login")
        } catch {
          setError("Failed to log out")
        }
      }
    return(
        <>
         <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as ={Link} to={ "/dashboard/Home"}>Home</Nav.Link>
            <Nav.Link as ={Link} to={"/dashboard/Projectmembers"}>Projectmembers</Nav.Link>
            <Nav.Link as ={Link} to= {"/dashboard/Project"}>Project</Nav.Link>
            <Nav.Link as = {Link} to= {"dashboard/Publication"}>Publication</Nav.Link>
            <Nav.Link onClick={handleLogout}> Log Out </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
        </>
    )
}
export default Dashboard
