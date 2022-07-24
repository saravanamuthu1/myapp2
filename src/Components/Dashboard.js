import React, { useState } from 'react';
import {Container} from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";

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
      <div>
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
      </div>
      </>
    )
}
export default Dashboard
