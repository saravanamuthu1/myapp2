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
function App() {
  return (
  <AuthProvider>
<Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
  <div className="w-100" style={{ maxWidth: "400px" }}>
<Routes>
          <Route exact path="/" element={<Signup />}> </Route>
          <Route exact path="/signup" element={<Signup/>}> </Route>
          <Route exact path="/dashboard" element={<Dashboard />}> </Route>
          <Route exact path="/login" element={<Login />}> </Route>
</Routes>
</div>
</Container>
</AuthProvider>
  );
}

export default App;
