import React from 'react'

function Register() {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Batu Chat App</span>
        <span className='title'>Register</span>
        <form>
          <input type="text" placeholder='display name'/>
          <input type="email" placeholder='email'/>
          <input type="password" placeholder='password'/>
          <input type="file" />
          <button>Sign Up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  )
}

export default Register