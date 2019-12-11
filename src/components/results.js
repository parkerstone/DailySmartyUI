import React, { useState, useEffect } from 'react'

import Logo from './logo'
import SearchBar from './searchBar'

const Results = props => {
  

  return (
    <div className='Results'>
      <Logo size={55} />
      <SearchBar />
    </div>
  )
}

export default Results