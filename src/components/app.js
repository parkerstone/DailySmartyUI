import React, { useState, useEffect } from 'react'
import Logo from './logo'
import SearchBar from './searchBar'
import RecentPosts from './recentPosts'

const App = props => {
  
  return (
    <div className='app'>
      <Logo />
      <SearchBar />
      <RecentPosts />
    </div>
  )
}

export default App