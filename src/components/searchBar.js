import React, { useState, useEffect } from 'react'
import { Field, reduxForm } from 'redux-form'
import { withRouter } from 'react-router-dom'

const renderInput = field => <input type="text" placeholder="&#xf002; Search DailySmarty" {...field.input} />


let SearchBar = props => {

  const handleFormSubmit = function({query}) {
    props.onSubmit(query)
  }

  const { handleSubmit } = props

  return (
    <form className={`SearchBar search-bar-${props.page}`} onSubmit={handleSubmit(handleFormSubmit)}>
      <div className='search-bar-wrapper'>
        <Field name="query" component={renderInput} />
        <p>Press return to search</p>
      </div>
    </form>
  )
}

SearchBar = reduxForm({form: 'searchBar'})(SearchBar)

SearchBar = withRouter(SearchBar)

export default SearchBar