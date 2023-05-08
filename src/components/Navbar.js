import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const {currentUser} = useContext(AuthContext);
  return (
    <div className='navbar'>
        <span className='logo'>Batu Chat</span>
        <div className="user">
              <img src={currentUser.photoURL} alt="" />
            <span>{currentUser.displayName}</span>
            <button onClick={()=>signOut(auth)}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar