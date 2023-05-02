import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
        <span className='logo'>Batu Chat</span>
        <div className="user">
            <img src="" alt="" />
            <span>Batu</span>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar