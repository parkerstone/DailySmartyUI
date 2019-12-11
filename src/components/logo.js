import React, { useState, useEffect } from 'react'

const Logo = props => {
  
  const size = {
    height: props.size || 105,
    width: props.size || 105
  }

  return (
    <div className='Logo'>
      <img style={size} alt="Daily Smarty Logo" src="/assets/ds_circle_logo.png" />
    </div>
  )
}

export default Logo