import React from 'react'

function Message() {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/16354624/pexels-photo-16354624.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
        <span>Batu</span>
      </div>

      <div className='messageContent'>
        <p>hello</p>
        <img src="https://images.pexels.com/photos/16540903/pexels-photo-16540903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
    </div>
  )
}

export default Message