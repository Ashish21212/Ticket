import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <>
      <main>
        <div className="container">

          <div className="heading">
            <img src="./Images/logo.png" alt="logo" />
            <h2>TicketSewa</h2>
          </div>

          <div className="menu">
            <NavLink className='menuu' to='/'>Home</NavLink>
            <NavLink className='menuu' to='/service'>AirTicket</NavLink>
            
            <NavLink className='menuu' to='/about'>BusTicket</NavLink>
            <NavLink className='menuu' to='/contact'>Contact</NavLink>

          </div>
        </div>
        <div className="plane">
          <img src="./Images/busplane.jpeg" alt="bus" />
        </div>
      </main>
      
    </>

  )
}

export default Menu
