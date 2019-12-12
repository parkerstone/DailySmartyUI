import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions'

import Logo from './logo'
import SearchBar from './searchBar'
import ResultsPosts from './resultsPosts'

const Results = props => {
  
  const handleSearchBarSubmit = query => {
    props.fetchPostsWithQuery(query)
  }

  return (
    <div className='Results'>
      <Logo size={55} />
      <SearchBar onSubmit={query => handleSearchBarSubmit(query)} />
      <ResultsPosts />
    </div>
  )
}

export default connect(null, actions)(Results)