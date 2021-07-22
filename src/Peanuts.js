import React from 'react';
import { NavLink } from 'react-router-dom';

const Peanuts = () => {
  return(
      <div>
      <h1>Peanuts</h1>
      <NavLink style={{color:'black'}} exact to='/'>Go Back</NavLink>
      </div>
  )
}

export default Peanuts;