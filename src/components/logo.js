import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Logo = props => {
  
  const size = {
    height: props.size || 105,
    width: props.size || 105
  }

  return (
    <div className='Logo'>
      <Link to='/'>
        <img style={size} alt="Daily Smarty Logo" src="/assets/ds_circle_logo.png" />
      </Link>
    </div>
  )
}

export default Logo