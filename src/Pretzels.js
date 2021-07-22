import React from 'react';
import { NavLink } from 'react-router-dom';

const Pretzels = () => {
  return (
    <div>
      <h1>Pretzels</h1>
      <NavLink style={{color:'black'}} exact to='/'>Go Back</NavLink>
    </div>
  )
}

export default Pretzels;
