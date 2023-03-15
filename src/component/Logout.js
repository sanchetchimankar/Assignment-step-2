import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css';

function LogoutButton() {
  const nav = useNavigate();

  function handleLogout() {
    
    nav('/Login');
   
  }

  return (
    <button onClick={handleLogout}>
      Log-out
    </button>
  );
}

export default LogoutButton;
