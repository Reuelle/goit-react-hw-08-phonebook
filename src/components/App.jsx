import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Register from '../pages/Register/Register'; // Correct import
import Login from '../pages/Login/Login';
import Contacts from '../pages/Contacts/Contacts';
import Navigation from '../Navigation/Navigation';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<PrivateRoute component={Contacts} />} />
        <Route path="*" element={<Navigate to="/contacts" />} />
      </Routes>
    </Router>
  );
}

export default App;
