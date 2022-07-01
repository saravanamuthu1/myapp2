import React from 'react';
import { Navbar, Row } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import {
    CDBSidebar,
    CDBSidebarHeader,
    CDBSidebarMenuItem,
    CDBSidebarContent,
    CDBSidebarMenu,
    CDBSidebarSubMenu,
    CDBSidebarFooter,
    CDBBadge,
    CDBContainer,
  } from 'cdbreact';
import './Sidebar.css';
function Home(){
    return(
    <div className='Container'style={{display:'flex'}}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          <div className="container" style={{display:'flex',alignItems: 'center',positon:"fixed"}}>
            <img
              src={'https://seeklogo.com/images/B/butterfly-logo-0A00378822-seeklogo.com.png'}
              alt=""
              style={{ width: '30px' }}
            />
            <h6 className="ml-2">Menu</h6>
          </div>
        </CDBSidebarHeader>
        <div className='Container'style={{height:'550px'}}>
        <CDBSidebarContent>
          <CDBSidebarMenu>
          <CDBSidebarMenuItem icon="th-large">  <Navbar>
            <Nav.Link as ={Link} to={"/dashboard/Home/Home/Sidebar"}>Home</Nav.Link>
        </Navbar></CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="th-large">  <Navbar>
            <Nav.Link as ={Link} to={"/dashboard/Home/Home/publication"}>publication</Nav.Link>
        </Navbar></CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="chart-line" iconType="solid">
            <Nav.Link as ={Link} to= {"/dashboard/Home/Project"}>Project</Nav.Link>
            </CDBSidebarMenuItem>
        <CDBSidebarMenuItem icon="th-large">  <Navbar>
        <Nav.Link as ={Link} to={"/dashboard/Home/Projectmembers"}>Projectmembers</Nav.Link>
        </Navbar></CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        </div>
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{padding: '20px 5px'}}
          >
            <Nav.Link as ={Link} to={"/dashboard/Home/Home/Sidebar"}>Logout</Nav.Link>
          </div>
        </CDBSidebarFooter>
        </CDBSidebar>
        <Outlet />
        </div>
    )
}
export default Home