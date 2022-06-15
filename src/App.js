import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client'
import Signup from './Components/Signup';
import { Container } from 'react-bootstrap';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import { AuthProvider } from './contexts/AuthContext';
import Home from './Components/Home';
import Publication from './Components/Publication';
import Project from './Components/Project';
import Projectmembers from './Components/Projectmembers';
function App() {
  return (
  <AuthProvider>
<Routes>
          <Route exact path="/" element={<Signup />}/> 
          <Route exact path="/signup" element={<Signup/>}/> 
          <Route exact path="/dashboard" element={<Dashboard />}>
          <Route exact path="/dashboard/Home" element={<Home/>}/>
          <Route exact path="/dashboard/Projectmembers" element={<Projectmembers />}/>
          <Route exact path="/dashboard/Project" element={<Project/>}/>
          <Route exact path="dashboard/Publication" element={<Publication />}/>
          </Route>
          <Route exact path="/login" element={<Login />}/>
</Routes>
</AuthProvider>
  );
}

export default App;
