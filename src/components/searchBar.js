import React, { useState, useEffect } from 'react'
import { Field, reduxForm } from 'redux-form'
import { withRouter } from 'react-router-dom'

const renderInput = field => <input type="text" placeholder="Search DailySmarty" {...field.input} />


let SearchBar = props => {

  const handleFormSubmit = function({query}) {
    props.onSubmit(query)
  }

  const { handleSubmit } = props

  return (
    <div className='SearchBar'>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Field name="query" component={renderInput} />
      </form>
    </div>
  )
}

SearchBar = reduxForm({form: 'searchBar'})(SearchBar)

SearchBar = withRouter(SearchBar)

export default SearchBar