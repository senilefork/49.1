import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css'

const VendingMachine = () => {
  return(
      <nav className="vending-machine">
        <p>Vending Machine</p>
        <NavLink exact to='/chips'>Chips</NavLink>
        <NavLink exact to='/peanuts'>Peanuts</NavLink>
        <NavLink exact to='/pretzels'>Pretzels</NavLink>
      </nav>
  )
}

export default VendingMachine;