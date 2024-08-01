import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css"

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    if (role === 'admin') {
      navigate('/admin');
    } else if (role === 'vendor') {
      navigate('/vendor');
    } else if (role === 'user') {
      navigate('/user');
    }
  };

  return (
    <div >
      <h2>Login Page</h2>
      <div className='Login-page'>
      <button className='btn' onClick={() => handleLogin('admin')}>Admin Login</button>
      <button className='btn' onClick={() => handleLogin('vendor')}>Vendor Login</button>
      <button className='btn' onClick={() => handleLogin('user')}>User Login</button>
      </div>
      
    </div>
  );
};

export default Login;
