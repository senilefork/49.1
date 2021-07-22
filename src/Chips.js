import React from 'react';
import { NavLink } from 'react-router-dom';

const Chips = () => {
  return (
      <div>
      <h1>CHIPS</h1>
      <NavLink style={{color:'black'}} exact to='/'>Go Back</NavLink>
      </div>
  )
};

export default Chips;