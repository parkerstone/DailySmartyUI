import React, { useState, useEffect } from 'react'
import { Field, reduxForm } from 'redux-form'

let SearchBar = props => {

  const handleFormSubmit = function({query}) {
    console.log("trying to handle submit for query", query)
  }

  const renderInput = field => <input type="text" placeholder="Search DailySmarty" {...field.input} />

  const { handleSubmit } = props

  return (
    <div className='SearchBar'>
      <form onSubmit={handleSubmit(handleFormSubmit.bind(this))}>
        <Field name="query" component={renderInput} />
      </form>
    </div>
  )
}

SearchBar = reduxForm({form: 'searchBar'})(SearchBar)

export default SearchBar