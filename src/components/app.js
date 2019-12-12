import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'


import Logo from './logo'
import SearchBar from './searchBar'
import RecentPosts from './recentPosts'

const App = props => {

  const handleSearchBarSubmit = function(query) {
    props.fetchPostsWithQuery(query)
    props.history.push('/results')
  }
  
  return (
    <div className='app'>
      <Logo />
      <SearchBar onSubmit={query => handleSearchBarSubmit(query)} />
      <RecentPosts />
    </div>
  )
}

export default connect(null, actions)(App)